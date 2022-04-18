const models = require('../models');
const response = require('../functions/serviceUtil.js');
const auth = require('../middlewares/auth.js');
const CustomError = require('../functions/CustomError');

module.exports = {
  name: 'authController',

  register: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const user = models.users

        if (!req.body.firstName) throw new CustomError('firstName Attribute is required', 412)
        if (!req.body.lastName) throw new CustomError('lastName Attribute is required', 412)
        if (!req.body.email) throw new CustomError('email Attribute is required', 412)
        if (!req.body.password) throw new CustomError('password Attribute is required', 412)
        if (!req.body.passwordConfirmation) throw new CustomError('passwordConfirmation Attribute is required', 412)

        if (req.body.password !== req.body.passwordConfirmation) {
          throw new CustomError('passwords are not the same', 412)
        }
        if (req.body.password && req.body.password.length < 6) {
          throw new CustomError('password must have at least 6 characters', 412)
        }

        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.email = req.body.email
        user.password = req.body.password

        const redisteredUser = await models.users.create(user)

        return redisteredUser
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  login: async (req, res, next) => {
    try {
      // Start Transaction
      const result = await models.sequelize.transaction(async (transaction) => {
        if (!req.body.password) throw new CustomError('Please send a Password', 412);

        const user = await models.users.findOne({
          where: {
            email: req.body.email,
          },
          transaction,
        })

        if (!user) throw new CustomError('Incorrect User or Password', 401)
        if (!user.checkPassword(req.body.password)) throw new CustomError('Incorrect User or Password', 401)
        
        return {
          token: auth.generateAccessToken({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          }),
          user,
        }
      })
      // Transaction complete!
      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
    } catch (error) {
      // Transaction Failed!
      next(error)
    }
  },
}

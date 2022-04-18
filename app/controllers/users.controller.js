const models = require('../models');
const response = require('../functions/serviceUtil.js');
const CustomError = require('../functions/CustomError');

module.exports = {
  name: 'usersController',

  update: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const user = await models.users.findByPk(req.user.id, { transaction })

        if (!req.body.password) throw new CustomError('You have to send your Actual Password', 412)
        if (!user.checkPassword(req.body.password)) throw new CustomError('The password is incorrect', 412)
        if (req.body.newPassword !== req.body.newPassword_confirmation) {
          throw new CustomError('The New Passwords are not the same', 412)
        }
        if (req.body.newPassword && req.body.newPassword.length < 6) {
          throw new CustomError('New Password must have at least 6 characters')
        }
        if (!req.body.firstName) throw new CustomError('First Name Attribute is required', 412)
        if (!req.body.lastName) throw new CustomError('Last Name Attribute is required', 412)

        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        if (req.body.newPassword) user.password = req.body.newPassword
        await user.save({ transaction })

        return 'Profile updated succesfully'
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },
}

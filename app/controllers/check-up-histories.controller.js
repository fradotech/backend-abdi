const models = require('../models');
const response = require('../functions/serviceUtil.js');
const CustomError = require('../functions/CustomError');

module.exports = {
  name: 'checkUpHistoriesController',

  create: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        if (!req.body.patientId) throw new CustomError('patientId Attribute is required', 412)

        const patient = await models.patients.findByPk(req.body.patientId, { transaction })
        const checkUp = models.check_up_histories

        if (!patient) throw new CustomError('Patient not found', 404)

        checkUp.patientId = patient.id
        checkUp.ilness = req.body.ilness
        checkUp.description = req.body.description

        const createdCheckUp = await models.check_up_histories.create(checkUp)

        return createdCheckUp
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  read: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const checkUp = await models.check_up_histories.findAll({ 
          include: models.patients
        })

        return checkUp
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  readOne: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const checkUp = await models.check_up_histories.findByPk(req.params.id, { 
          transaction,
          include: models.patients
        })

        return checkUp
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  delete: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const checkUp = await models.check_up_histories.findByPk(req.params.id, { transaction })
        if (!checkUp) throw new CustomError('Check Up History not found', 404)

        const DeletedCheckUp = await checkUp.destroy({ transaction })

        return DeletedCheckUp
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },
}

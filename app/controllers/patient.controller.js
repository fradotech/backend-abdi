const models = require('../models');
const response = require('../functions/serviceUtil.js');
const CustomError = require('../functions/CustomError');

module.exports = {
  name: 'patientsController',

  create: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        if (!req.body.name) throw new CustomError('name Attribute is required', 412)

        const patient = {
          name: req.body.name,
          description: req.body.description,
          birthPlace: req.body.birthPlace,
          birth: req.body.birth,
          age: req.body.age,
          address: req.body.address,
          phone: req.body.phone,
        }

        const createdPatient = await models.patients.create(patient)

        return createdPatient
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  list: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const patients = await models.patients.findAll()

        return patients
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  profile: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const patient = await models.patients.findByPk(req.params.id, { transaction })

        return patient
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },

  update: async (req, res, next) => {
    try {
      const result = await models.sequelize.transaction(async (transaction) => {
        const patient = await models.patients.findByPk(req.params.id, { transaction })

        patient.name = req.body.name
        patient.description = req.body.description
        patient.birthPlace = req.body.birthPlace
        patient.birth = req.body.birth
        patient.age = req.body.age
        patient.address = req.body.address
        patient.phone = req.body.phone

        if (req.body.name) patient.name = req.body.name
        if (req.body.description) patient.description = req.body.description
        if (req.body.birthPlace) patient.birthPlace = req.body.birthPlace
        if (req.body.birth) patient.birth = req.body.birth
        if (req.body.age) patient.age = req.body.age
        if (req.body.address) patient.address = req.body.address
        if (req.body.phone) patient.phone = req.body.phone
        
        const updatedPatient = await patient.save({ transaction })

        return updatedPatient
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
        const patient = await models.patients.findByPk(req.params.id, { transaction })
        const DeletedPatient = await patient.destroy({ transaction })

        return DeletedPatient
      })

      res.status(200).send(response.getResponseCustom(200, result))
      res.end()
      
    } catch (error) {
      next(error)
    }
  },
}

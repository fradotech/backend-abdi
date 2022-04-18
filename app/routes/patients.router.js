const express = require('express');

const router = express.Router()
const controllers = require('../controllers/index')
const { authMiddleware } = require('../middlewares/auth.js')

router.post('/', [ authMiddleware ], controllers.patientsController.create)
router.get('/', [ authMiddleware ], controllers.patientsController.read)
router.get('/:id', [ authMiddleware ], controllers.patientsController.readOne)
router.put('/:id', [ authMiddleware ], controllers.patientsController.update)
router.delete('/:id', [ authMiddleware ], controllers.patientsController.delete)

module.exports = {
  basePath: '/patients',
  router,
}

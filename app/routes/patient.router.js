const express = require('express');

const router = express.Router()
const controllers = require('../controllers/index')
const { authMiddleware } = require('../middlewares/auth.js')

router.post('/', [ authMiddleware ], controllers.patientsController.create)
router.get('/list', [ authMiddleware ], controllers.patientsController.list)
router.get('/:id', [ authMiddleware ], controllers.patientsController.profile)
router.put('/:id', [ authMiddleware ], controllers.patientsController.update)
router.delete('/:id', [ authMiddleware ], controllers.patientsController.delete)

module.exports = {
  basePath: '/patients',
  router,
}

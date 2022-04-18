const express = require('express');

const router = express.Router()
const controllers = require('../controllers/index')
const { authMiddleware } = require('../middlewares/auth.js')

router.post('/', [ authMiddleware ], controllers.checkUpHistoriesController.create)
router.get('/', [ authMiddleware ], controllers.checkUpHistoriesController.read)
router.get('/:id', [ authMiddleware ], controllers.checkUpHistoriesController.readOne)
router.delete('/:id', [ authMiddleware ], controllers.checkUpHistoriesController.delete)

module.exports = {
  basePath: '/check-up-histories',
  router,
}

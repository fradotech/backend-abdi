const express = require('express');

const router = express.Router()
const controllers = require('../controllers/index')
const { authMiddleware } = require('../middlewares/auth.js')

router.put('/', [ authMiddleware ], controllers.userController.update)
router.get('/me', [ authMiddleware ], controllers.userController.profile)

module.exports = {
  basePath: '/user',
  router,
}

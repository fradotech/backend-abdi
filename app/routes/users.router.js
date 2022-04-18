const express = require('express');

const router = express.Router()
const controllers = require('../controllers/index')
const { authMiddleware } = require('../middlewares/auth.js')

router.put('/', [ authMiddleware ], controllers.usersController.update)

module.exports = {
  basePath: '/users',
  router,
}

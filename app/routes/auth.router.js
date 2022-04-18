const express = require('express');

const router = express.Router()
const controllers = require('../controllers/index')
const { authMiddleware } = require('../middlewares/auth.js')

router.post('/register', [], controllers.authController.register)
router.post('/login', [], controllers.authController.login)

module.exports = {
  basePath: '/auth',
  router,
}

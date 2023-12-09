const Router = require('express')
const router = new Router()
const appController = require('../controllers/appController')
const { check } = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.get('/scores', roleMiddleware(['USER', 'ADMIN']), appController.getUsers)

module.exports = router

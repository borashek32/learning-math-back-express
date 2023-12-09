const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const { check } = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require('../middleware/roleMiddleware')

router.post(
  '/registration',
  [
    check('username', 'User name can not be empty').notEmpty(),
    check('password', 'Password should be between 4 and 7 symbols').isLength({ min: 4, max: 7 }),
  ],
  authController.registration
)

router.post('/login', authController.login)
router.get('/users', roleMiddleware(['USER', 'ADMIN']), authController.getUsers)
router.post('/logout', authController.logout)

module.exports = router

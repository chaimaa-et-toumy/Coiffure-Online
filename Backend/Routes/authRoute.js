const express = require('express')
const router = express.Router()

const { Login, Register, ForgetPassword, verify_email_rest, verify_email, resetpassword } = require('../Controllers/authController')

router.post('/login', Login)
router.post('/register', Register)
router.post('/forgetPassword', ForgetPassword)
router.get('/forgetPassword/:token', verify_email_rest)
router.get('/verify_email/:token', verify_email)
router.post('/resetpassword/:token', resetpassword)


module.exports = router
import express from 'express'
const router = express.Router()

import { loginUser , registerUser, loginAdminUser } from '../controllers/authController.js'

router.post('/register', registerUser )
router.post('/login', loginUser)
router.post('/admin-login', loginAdminUser)


export default router
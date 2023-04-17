import express from 'express'
const router = express.Router()

import { userRoles, userInfo, allUsers, deleteUser, updateUser, updateUserRoles } from '../controllers/userController.js'
import { verify } from '../middlewares/verify.js'

router.get('/roles', verify, userRoles )
router.get('/all', allUsers)
router.get('/info', verify, userInfo )
router.delete('/delete', deleteUser)
router.put('/update', updateUser )
router.put('/updateRoles', updateUserRoles )

export default router


import express from 'express'

import { registerAdmin, registerStudent, registerWard, login, logout } from '../controllers/auth.contoller.js'
import { authorizedRoles, authenticated } from '../middleware/auth.middleware.js'


const router = express.Router()

router.post('/registerStudent', authorizedRoles("superAdmin", "admin"), registerStudent)
router.post('/registerAdmin',  registerAdmin)
router.post('/registerWard', authorizedRoles("superAdmin", "admin"), registerWard)
router.post('/login',  login)
router.post('/logout', logout)

export default router
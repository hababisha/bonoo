import express from 'express'

import { login, logout , registerStudent, registerAdmin, registerWard} from '../controllers/auth.controller.js'
import { authorizedRoles, authenticated } from '../middleware/auth.middleware.js'

import { registerSchema, loginSchema } from '../schemas/user.schema.js'
import { validateInput } from "../middleware/inputValidate.js"

const router = express.Router()

router.post('/registerStudent', validateInput(registerSchema),authorizedRoles("superAdmin", "admin"), registerStudent)
router.post('/registerAdmin',validateInput(registerSchema),  registerAdmin)
router.post('/registerWard', validateInput(registerSchema),authorizedRoles("superAdmin", "admin"), registerWard)

router.post('/login', validateInput(loginSchema), login)



router.post('/logout', logout)

export default router
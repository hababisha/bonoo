import express from 'express'

import { loginStudent, logout , registerStudent} from '../controllers/auth.controller.js'
import { authorizedRoles, authenticated } from '../middleware/auth.middleware.js'

import { registerSchema, loginSchema } from '../schemas/user.schema.js'
import { validateInput } from "../middleware/inputValidate.js"

const router = express.Router()

router.post('/registerStudent', validateInput(registerSchema),authorizedRoles("superAdmin", "admin"), registerStudent)
router.post('/loginStudent', validateInput(loginSchema), loginStudent)

router.post('/registerAdmin',validateInput(registerSchema), authorizedRoles("superAdmin"), registerAdmin)
router.post('/loginAdmin', validateInput(loginSchema), loginAdmin)

router.post('/registerWard', validateInput(registerSchema),authorizedRoles("superAdmin", "admin"), registerWard)
router.post('/loginWard', validateInput(loginSchema),authorizedRoles("admin", "superAdmin"), loginWard)

router.post('/logout', logout)

export default router
import express from "express"
import { authorizedRoles } from "../middleware/auth.middleware.js"
import { approvePermission, completePermission, rejectPermission, requestPermission } from "../controllers/permission.controller.js"

const router = express.router()

router.post('/request', authorizedRoles("students"), requestPermission)
router.post('/approve', authorizedRoles("admin", "superAdmin"), approvePermission)
router.post('/reject', authorizedRoles("admin","superAdmin"), rejectPermission)
router.post('/complete', authorizedRoles("wards"), completePermission)

export default router
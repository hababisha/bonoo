import express from "express"
import { authorizedRoles } from "../middleware/auth.middleware.js"
import { approvePermission,
         completePermission,
         rejectPermission, 
         requestPermission,
         permissions,
         approvedPermissions } from "../controllers/permission.controller.js"

const router = express.Router()

router.post('/request', authorizedRoles("students"), requestPermission)
router.get('/requests', authorizedRoles("admin, superAdmin"), permissions)
router.get('/approvedPermissions', authorizedRoles("wards", "admin", "superAdmin"), approvedPermissions)
router.post('/approve/:id', authorizedRoles("admin", "superAdmin"), approvePermission)
router.post('/reject/:id', authorizedRoles("admin","superAdmin"), rejectPermission)
router.delete('/complete/:id', authorizedRoles("wards"), completePermission)

export default router
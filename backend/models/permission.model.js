import mongoose from "mongoose"
import Admins from "./admin.model"
import Students from "./student.model"

const permissionSchema = new mongoose.Schema({
    reason : {
            type: String,
        },
    requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    status : {
        type: String,
        enum : ["pending", "approved", "rejected", "completed"],
        default: 'pending',
    },
    approvedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'},
})


const Permissions = new mongoose.model("Permission", permissionSchema)
export default Permissions
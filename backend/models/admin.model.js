import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    adminId: {
        type: String,
        required: true,
    },
    name: {
        type : String,
    },
    password: {
        type: String,
        required: true
    },
    role :{
        type: String,
        default : "admin"
    }

})

const Admins = new mongoose.model("Admin", adminSchema)
export default Admins
import mongoose from "mongoose"

const wardSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role :{
        type: String,
        default: "ward",
    }

})


const Wards = new mongoose.model("Ward", wardSchema)
export default Wards
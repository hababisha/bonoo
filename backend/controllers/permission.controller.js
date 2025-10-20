import Permissions from "../models/permission.model"

//todo -> use websockets event being a change on each function on here

//list of permissions
export const permissions = async (req, res) => {
    // res.send("list of permissions")
    try {
        let permissions = await Permissions.find()
        res.send(permissions)
        res.status(200).json({message: "permissions list success"})
    } catch (error) {
       console.error(error, error.message) 
       res.status(500).json({ error : error.message})
    }
}

//requestPermission
export const requestPermission = async (req, res) => {
    try{
        const { reason, requestedBy } = req.body

        const userOngoingRequest = await Permissions.findOne({ requestedBy })

        if (userOngoingRequest && userOngoingRequest.status == "approved"){
            res.status(400).json({message: "request already exists and it is approved"})
            return
        }

        else if (userOngoingRequest&& userOngoingRequest.status == "pending"){
            return res.send(400).json({message: "request already exists and it is pending"})
        }
        //if it is rejected or it doesn't exist
        else {
            const newRequest = await Permissions.create({
                reason,
                requestedBy,
                status : "pending"
            })

            res.status(201).json({message: "permission requested successfully",
                request: newRequest
            })
        }
    } catch(error){
        console.error(error)
        res.status(500).json({error : error.message})

    }
}
//list of approved Permissions
export const approvedPermissions = async (req, res) => {
    try {
       const permissions = await Permissions.find({ status: "approved"}).populate("requestedBy", "name")
       res.status(200).json({ permissions})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message})
    }   
}


//approvePermission
export const approvePermission = async (req, res) => {
    try {
        const {id} = req.params
    
        const permission =  await Permissions.findById(id)

        if (!permission){
           res.status(404).json({message: "permission not found"})
        }
        permission.status = "approved"
        await permission.save()

        res.status(200).json({message: "permission approved successfully!"})
    
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

//rejectPermission
export const rejectPermission = async (req, res) => {
    try{
        const {id} = req.params
        const permission = await Permissions.findById(id)

        if (!permission){   
            return res.status(404).json({ message: "permission not found"})
        }

        permission.status = "rejected"
        await permission.save()
        res.status(200).json({message: "permission rejected successfully!"})

    }catch (error){
        console.error(error)
        res.status(500).json({error: error.message})
    }

}

//completePermission (for wards)
export const completePermission = async (req, res) => {
    try{
        const { id } = req.params
        const permission = await Permissions.findById(id)

        if (!permission){
            res.status(400).json({message: "permission doesn't exist"})
        }

        await Permissions.findByIdandDelete(id)
        res.status(200).json({ message: "completed and deleted request successfully"})
    }catch (error){
        console.error(error)
        res.status(500).json({error: error.message})
    }
}
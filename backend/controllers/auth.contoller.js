import { hashPassword, validatePassword } from "../utils/hash.js";
import Students from "../models/student.model.js";
import Admins from "../models/admin.model.js";
import Wards from "../models/ward.model.js";
import { generateAccessToken, generateRefreshToken } from "../services/generateToken.js";
import  mongoose from "mongoose"

/**
 * Register Strudent
 */
export const registerStudent = async (req, res) =>{
    try {
        const { studentId, department, classYear, name, password } = req.body

        const userExists = await Students.findOne({ studentId })
        if (userExists){
            return res.status(400).json({message: "student already exists"})
        }

        const hashedPass= await hashPassword(password)

        const newUser = await Students.create({
            studentId,
            department,
            classYear,
            name,
            password: hashedPass,
            role: "student",
        })

        const accessToken = generateAccessToken(newUser._id, newUser.role) // _id - unique key gen by mongodb
        const refreshToken = generateRefreshToken(newUser._id, newUser.role)
        
        res.cookie("accessToken", accessToken, {httpOnly: true, sameSite: true})
        res.cookie("refreshToken", refreshToken, {httpOnly: true, sameSite: true})
        res.status(201).json({
            message: "student registered successfully",
            studentId: newUser.studentId,
        })

    } catch(error){
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}


export const registerAdmin = async (req, res) => {
    try{
        const { adminId, password }  = req.body

        const userExists = await Admins.findOne({ adminId })
        if (userExists){
            return res.status(400).json({ message: "admin already exists"})
        }

        const hashedPass = await hashPassword(password)

        const newUser = await Admins.create({
            adminId, 
            password: hashedPass,
            role: "admin"
        })

        const accessToken = generateAccessToken(newUser._id, newUser.role) // _id - unique key gen by mongodb
        const refreshToken = generateRefreshToken(newUser._id, newUser.role)
        
        res.cookie("accessToken", accessToken, {httpOnly: true, sameSite: true})
        res.cookie("refreshToken", refreshToken, {httpOnly: true, sameSite: true})
        res.status(201).json({
            message: "admin registered successfully",
            adminId: newUser.adminId,
        })

    }catch(error){
        console.error(error)
        res.status(500).json({error: error.message})
    }
}



export const registerWard = async (req, res) => {
    try{
        const { wardId, password} = req.body

        const userExists = await Wards.findOne({ wardId })
        if (userExists){
            return res.status(400).json({message: "ward already exists"})
        }

        const hashedPass = await hashPassword(password)

        const newUser = await Wards.create({
            wardId, 
            password: hashedPass,
            role: "ward"
        })

        const accessToken = generateAccessToken(newUser._id, newUser.role) // _id - unique key gen by mongodb
        const refreshToken = generateRefreshToken(newUser._id, newUser.role)
        
        res.cookie("accessToken", accessToken, {httpOnly: true, sameSite: true})
        res.cookie("refreshToken", refreshToken, {httpOnly: true, sameSite: true})
        res.status(201).json({
            message: "ward registered successfully",
            wardId: newUser.wardId,
        })
    }catch(error){
        console.error(error)
        res.status(500).json({ error: error.message })
    }

}


export const login = async (req, res) => {
    try {
        const { userId , password } = req.body

        //this is slow need to refactor it 
        // let user = (await Students.findOne({ studentId: userId })) ||
        //             (await Admins.findOne({ adminId: userId})) ||
        //             (await Wards.findOne({ wardId: userId}))
        
        let user = await Admins.findOne({adminId: userId})
        if (!user){
            user = await Wards.findOne({ wardId: userId})
            if (!user){
                user = await Students.findOne({ studentId: userId})
            }
        }

        if (!user) {
            return res.status(401).json({ message: "invalid Id or password" })
        }

        const isValid= await validatePassword(password, user.password)
        if (!isValid){
            return res.status(401).json({ message: "invalid Id or password" })
        }

        const accessToken = generateAccessToken(user._id, user.role)
        const refreshToken = generateRefreshToken(user._id, user.role)

        res.cookie("accessToken", accessToken, {httpOnly: true, sameSite: true})
        res.cookie("refreshToken", refreshToken, {httpOnly: true, sameSite: true})

        res.status(200).json({
            message: "Login successful"
        })
    } catch (error) {
       console.error(error) 
       res.status(500).json({error: error.message})
    }
}

export const logout = async (req,res) => {
    try {
        res.clearCookie('accessToken').status(200).json({message: "Logout successful"})
        res.clearCookie('refreshToken')
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

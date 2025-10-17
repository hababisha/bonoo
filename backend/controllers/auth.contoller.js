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

        const hashedPass= hashPassword(password)

        const newUser = await Students.create({
            studentId,
            department,
            classYear,
            name,
            password,
            password: hashedPass,
            role: "student",
        })

        const accessToken = generateAccessToken(newUser._id, newUser.role) // _id - unique key gen by mongodb
        const refreshToken = generateRefreshToken(newUser._id, newUser.role)
        
        res.cookie("accessToken", accessToken, {httpOnly: true})
        res.status(201).json({
            message: "student registered successfully",
            studentId: newUser.studentId,
        })

    } catch(error){
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export const loginStudent = async (req, res) => {
    try {
        const { studentId, password } = req.body

        const user = await Students.findOne({ studentId })
        if (!user) {
            return res.status(401).json({message: "invalid Student Id or password"})
        }

        const isValid= await validatePassword(password, user.password)
        if (!isValid){
            return res.status(401).json({ message: "invalid Student Id or password"})
        }

        const accessToken = generateAccessToken(user._id, user.role)
        const refreshToken = generateRefreshToken(user._id, user.role)

        res.cookie("accessToken", accessToken, {httpOnly: true})
        res.status(200).json({
            message: "Login successful"
        })
    } catch (error) {
       console.error(error) 
       res.status(500).json({error: error.message})
    }
}

export const registerAdmin = async (req, res) => {

}

export const loginAdmin = async (req,res) => {

}



export const registerWard = async (req, res) => {

}

export const loginWard = async (req, res) => {

}


export const logout = async (req,res) => {
    try {
        res.clearCookie('accessToken').status(200).json({message: "Logout successful"})
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

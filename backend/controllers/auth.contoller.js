import { hashPassword, validatePassword } from "../utils/hash.js";
import Students from "../models/student.model.js";
import { generateAccessToken, generateRefreshToken } from "../services/generateToken.js";
import  mongoose from "mongoose"

export const registerStudent = async (req, res) =>{
    try {
       const user = await Students.findOne({userId: req.body.studentId})

       if (user){
        return res.status(400).json({message: "student already exists"})
       }

       const hashedPass = await hashPassword(req.body.hashPassword)

       const newUser = await Students.create({
            studentId: req.body.studentId,
            department: req.body.department,
            classYear: req.body.classYear,
            name: req.body.name,
            password: hashedPass,
       })

       const accessToken = generateAccessToken(newUser.studentId)
       res.cookie('accessToken', accessToken, {httpOnly: true})
       res.status(201).json({
        studentId: newUser.studentId
       })
    } catch (error) {
        console.error(error)
        res.status(500).json({error: error.message})
    }
}

export const loginStudent = async (req, res) => {
    try {
       const user = await Students.findOne({studentId: req.body.studentId}) 
       if (!user){
        return res.status(401).json({message: "Invalid student id or password"})
       }

       const passwordVerification = await validatePassword(req.body.password)
       if (!passwordVerification){
        return res.status(401).json({message: "Invalid student id or password"})
       }

       const token = generateAccessToken(user.studentId)
       res.cookie('accessToken', token, {httpOnly: true})
       res.status(200).json({message: "login successful"})
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

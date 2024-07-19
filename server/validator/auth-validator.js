import {z} from "zod"

const signupSchema = z.object({
    username: z
    .string({required_error:"username is required"})
    .trim()
    .min(3,{msg:"name must be 3 or more chars"})
    .max(255, {msg:"name cannot exceed more than 255 chars"}),

    email: z
    .string({required_error:"email is required"})
    .trim()
    .email({msg:"email is invalid"}),

    phone: z
    .string({required_error:"phone num is req"})
    .trim()
    .min(10, {msg:"phone num is short"})
    .max(12, {msg:"phone num is too long"}),
    
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6, {msg:"password is too short, must be greater than 6 chars"})
    
})
const signInSchema = z.object({
    email: z
    .string({required_error:"Please enter your email"})
    .trim()
    .email({msg:"email is not valid"}),

    password: z
    .string({required_error:"Please Enter your password"})
    .trim()
    .min(6, {msg:"password must be of more than 6 chars"})
})
export  {signupSchema, signInSchema}
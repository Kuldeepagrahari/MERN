import {z} from "zod"

const signupSchema = z.object({
    username: z
    .string({required_error:"username is required"})
    .trim()
    .min(3,"Username should be atleast 3 chars")
    .max(255, {msg:"name cannot exceed more than 255 chars"}),

    email: z
    .string({required_error:"email is required"})
    .trim()
    .email("email is invalid"),

    phone: z
    .string({required_error:"phone num is req"})
    .trim()
    .min(10, "phone number is too short")
    .max(12, "phone number is too long"),
    
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6, "Password is too short, must be greater than 6 chars")
    
})
const signInSchema = z.object({
    email: z
    .string({required_error:"Please enter your email"})
    .trim()
    .email("Email is not valid"),

    password: z
    .string({required_error:"Please Enter your password"})
    .trim()
    .min(6, "Password should be atleast 6 chars")
})
export  {signupSchema, signInSchema}
import {z} from 'zod'

const contactSchema = z.object({
    name: z
    .string({required_error:"Enter your name please"})
    .trim()
    .min(3, "name must have more than 3 chars" ),
    email:z
    .string({required_error:"Enter your email please"})
    .trim()
    .email("email is invalid"),

    message:z
    .string({required_error:"Your message is invaluable for me, please enter"})
    .trim()
    .min(15, "please give little bigger message")

})

export default contactSchema
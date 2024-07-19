import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})
// creating new collection 'contact'
const Contact = new mongoose.model("contact", contactSchema)
export default Contact



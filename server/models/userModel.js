import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type: email,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})


// defining the collection name and its schema
const User = new mongoose.model("User", userSchema)
export default User
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

//middleware for hashing the password

userSchema.pre('save', async function(){
  /* The code `if (!this.isModified("password")) { next() }` is a conditional check in a Mongoose
  middleware function. */
    if ( !this.isModified("password")){
        next()
    }

    try{
        const saltRound = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, saltRound)
    }catch(err){
        next(err)
    }
})


//jwt token generation
userSchema.methods.generateToken = async function(){
    try{
        console.log(this)
        const token = jwt.sign({
            userId:this._id,
            email:this.email,
            isAdmin:this.isAdmin
        }, process.env.JWT_SECRET_KEY,{
            expiresIn:'7d'
        })
        return token

    }catch(err){
        console.error(err)
    }
}
// comparing password
userSchema.methods.isPasswordCorrect = async function(pass){
   try{
      return await bcrypt.compare(pass, this.password)
   }catch(err){
    console.error(err)
   }
}
// defining the collection name and its schema
const User = new mongoose.model("User", userSchema)
export default User
import mongoose from "mongoose";
import env from "dotenv"
env.config()
// const URI = "mongodb://localhost:27017"
const URI = process.env.MONGODB_URI
// password should be URL encoded, @ = %40
const connectDb = async() =>{
    try{
       await mongoose.connect(URI)
       console.log("db connection successful")
    }catch(err){
        console.error("connection failed" + err.message)
      //terminating the application with exit code 0
        process.exit(0)
    }
}

export default connectDb
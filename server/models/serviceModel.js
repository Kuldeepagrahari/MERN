import {model, Schema} from "mongoose"

const ServiceSchema = new Schema({
    topic:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})

const Service = new model("Service", ServiceSchema)
export default Service
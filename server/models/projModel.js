import {Schema, model} from "mongoose"

const projSchema = new Schema({
    topic:{
      type:String,
      required:true
    },
    link:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
})


const Projects = new model("Project", projSchema)
export default Projects
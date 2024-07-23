
import Projects from "../models/projModel.js"

const projController = async (req, res) => {
    try{
         const responseFromDb = await Projects.find()

         res.status(201).json(responseFromDb)
     
    }catch(err){
       res.status(401).json({msg:`error from projController: ${err}`})
    }
}

export default projController 
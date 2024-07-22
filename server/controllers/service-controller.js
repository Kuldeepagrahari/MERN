import Service from "../models/serviceModel.js"
const serviceController = async (req, res) =>{
   try{
      const Services_resp = await  Service.find()
      console.log(Services_resp)

      if ( !Services_resp ){
        res.status(404).json({msg:"No Services found"})
      }

      res.status(201).json(Services_resp)

   }catch(err){
    console.log("error from serviceontroller: " + err )
   }
}

export default serviceController
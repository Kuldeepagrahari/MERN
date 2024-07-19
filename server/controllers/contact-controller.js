import Contact from "../models/contactModel.js";

async function contactController (req, res) {

    try{
        const {name, email, message} = req.body
        await Contact.create({name, email, message})
        res.status(200).json({msg:"your message has been saved"})
    }catch(err){
        next(err)
    }

     
}
export default contactController


const validate = (schema) => async (req, res, next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    }catch(err){
        console.log(err)
        const error = {
            status:500,
            message:"fill the inputs carefully",
            description:err.errors[0].message
        }
        next(error)
    }
}
export default validate
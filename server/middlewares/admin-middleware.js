const adminMiddleware = async (req, res, next) => {
    try{
         const userdata = req.user 
         if(userdata.isAdmin === true ){
            // res.status(200).json(userdata)
            next()
         }else{
            res.status(404).json("You are not Admin")
            
         }


    }catch(err){
        res.status(404).json("You are not a admin / admin error")
    }
}

export default adminMiddleware
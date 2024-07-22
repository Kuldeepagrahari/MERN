


const userController = (req, res) => {
  try{
      
    const user = req.user
    res.status(201).json(user)

  }catch(err){
    console.log(`error in userController: ${err}`)
  }
}
export default userController
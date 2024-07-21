import React, { useState } from 'react'
import registerPic from "../assets/register.png"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom'

import {useAuth} from  "../storeContext/authContext.jsx" 

const Register = () => {
  const navigation = useNavigate()

  const {StoreTokenInLS} = useAuth()

  const [userdata , setUserdata] = useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })

  const handleUser = (e) => {
    let value = e.target.value
    let name = e.target.name
     setUserdata({
      ...userdata,[name]:value
     })
    //  console.log(e)
  }
// ...userdata se hoga ye ki baki cheeze append ho jaengi waise ke waise 
// [name]:value  => name key ki value update hogi bas with corresponding value
  const handleSubmit = async (e) => {
    // jab hum form submit krte h to vo by default page ko refresh kr deta h
   e.preventDefault()
  //  console.log(userdata)

   const response = await fetch('http://localhost:5000/api/auth/register',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(userdata)

   })

    
   if ( response.ok ){
    const res_data = await response.json()
    
    StoreTokenInLS(res_data.token)
    
    console.log(res_data.token)

    
    setUserdata({ username:"",
    email:"",
    phone:"",
    password:""})
   }
   console.log("sam")

   navigation("/login")
  
  }

  return (
    <div className='register'>
      <div id="reg-cont">
     <div className="reg-left">
      
       <img src={registerPic} alt="" />
       <p>OR</p>
        <p>If you have your account then </p>
        <Link to="/login">Login</Link>
     </div>
     <div className="reg-right">
         <h1>Register</h1>
        <form onSubmit={handleSubmit}>

          <input  autoComplete="off" type="text" name="username" placeholder='Username' value={userdata.username}  onChange={handleUser}/>
          <input type="email" placeholder='Email'name='email' value={userdata.email} onChange={handleUser} />
          <input autoComplete="off" type="text" name='phone' placeholder='Phone' value={userdata.phone}  onChange={handleUser}/>
          <input autoComplete="off" type="password" name='password' placeholder='Password' value={userdata.password} onChange={handleUser}/>
          <button type='submit'>Sign Up</button>
        </form>
  
     </div>
     </div>
    </div>
  )
}

export default Register

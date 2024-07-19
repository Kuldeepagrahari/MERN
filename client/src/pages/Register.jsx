import React from 'react'
import registerPic from "../assets/register.png"
import {Link} from "react-router-dom"
const Register = () => {
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
        <form action="">

          <input autoComplete="off" type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input autoComplete="off" type="text" placeholder='Phone' />
          <input autoComplete="off" type="password" placeholder='Password'/>
          <button type='submit'>Sign Up</button>
        </form>
  
     </div>
     </div>
    </div>
  )
}

export default Register

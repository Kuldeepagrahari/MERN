import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {

  const [isUnderine, setUnderline ] = useState(false)

  return (
    <div className='nav'>
      <header>
        <h1><Link to="/">SamTechnicals.</Link></h1>
        <ul>
          <Link to="/"><li>Home</li></Link> 
          <Link to="/about"> <li>About</li></Link>
          <Link to="/services"><li>Services</li></Link>
          <Link to="/contact"> <li>Contact</li></Link>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/register"><li>Register</li></Link>
        </ul>
      </header>
    </div>
  )
}

export default Navbar


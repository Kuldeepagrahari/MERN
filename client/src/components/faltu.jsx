import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {

  const [activelink, setActivelink ] = useState('home')
  
  const handleBottom = () => {

  }
  return (
    <div className='nav'>
      <header>
        <h1><Link to="/">SamTechnicals.</Link></h1>
        <ul>
          <Link to="/"  exact activeClassName='active'><li>Home</li></Link> 
          <Link to="/about"> <li onClick={()=>setActivelink('about')} className={`${activelink === 'about' ? 'active' : ''}`}>About</li></Link>
          <Link to="/services"><li onClick={()=>setActivelink('service')} className={`${activelink === 'service' ? 'active' : ''}`}>Services</li></Link>
          <Link to="/contact"> <li onClick={()=>setActivelink('contact')} className={`${activelink === 'contact' ? 'active' : ''}`}>Contact</li></Link>
          <Link to="/login"><li onClick={()=>setActivelink('login')} className={`${activelink === 'login' ? 'active' : ''}`}>Login</li></Link>
          <Link to="/register"><li onClick={()=>setActivelink('register')} className={`${activelink === 'register' ? 'active' : ''}`}>Register</li></Link>
        </ul>
      </header>
    </div>
  )
}

export default Navbar


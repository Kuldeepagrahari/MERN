import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {

  return (
    <div className='nav'>
      <header>
        <h1><Link to="/">SamTechnicals.</Link></h1>
        <ul>
          <NavLink to="/"   activeClassName='active'><li>Home</li></NavLink> 
          <NavLink to="/about" activeClassName='active'> <li>About</li></NavLink>
          <NavLink to="/services" activeClassName='active'><li>Services</li></NavLink>
          <NavLink to="/contact" activeClassName='active'> <li>Contact</li></NavLink>
          <NavLink to="/login" activeClassName='active'><li>Login</li></NavLink>
          <NavLink to="/register" activeClassName='active'><li>Register</li></NavLink>
        </ul>
      </header>
    </div>
  )
}

export default Navbar


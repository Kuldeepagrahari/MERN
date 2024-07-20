import React from 'react'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
      <h3>Page Not Found</h3>
      <h1>404</h1>
      <p>OOPS ! it seems like the page you want to access not exist, If you believe there is an issue , feel free to report your problem, and I will look into it.</p>
      <div className="err-btns">
        <Link to="/">return home </Link>
        <Link to='/contact'>report problem</Link>
      </div>

    </div>
  )
}

export default Error

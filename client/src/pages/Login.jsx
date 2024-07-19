import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='login'>
            <div className="login-cont">
                <div className="login-left">

                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?ga=GA1.1.855403509.1721333165&semt=ais_user" alt="login-pic" />

                </div>
                <div className="login-right">
                    <h1>Login</h1>
                    <form action="">


                        <input type="email" placeholder='Email' />

                        <input type="password" placeholder='Password' />
                        <button type='submit'>Sign In</button>

                    </form>
                    <p>OR</p>
                    <p>If you don't have any <br />account then <Link to="/register">Register</Link></p>


                </div>
            </div>
        </div>
        // <h1>hey</h1>
    )
}

export default Login

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../storeContext/authContext'
const Login = () => {
    const navigation = useNavigate()

    const { StoreTokenInLS } = useAuth()
    const [userdata, setUserdata] = useState({
        email: "",
        password: ""
    })

    const handleUserdata = (e) => {
        // input me name aur value hona chahiye, name se pata chalta h ki konsa input h value se pta chalta h ki uski user ne kya value di h
        let name = e.target.name
        let value = e.target.value

        setUserdata({
            ...userdata, [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(userdata)

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(userdata)
        })

        if (response.ok) {
            const res_data = await response.json()
            StoreTokenInLS(res_data.token)
            setUserdata({
                email: "",
                password: ""
            })

            navigation("/")
        } else {
            alert("Invalid Credentials")
        }
    }
    return (
        <div className='login'>
            <div className="login-cont">
                <div className="login-left">

                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?ga=GA1.1.855403509.1721333165&semt=ais_user" alt="login-pic" />

                </div>
                <div className="login-right">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>


                        <input type="email" placeholder='Email' value={userdata.email} name='email' onChange={handleUserdata} />

                        <input type="password" placeholder='Password' value={userdata.password} name='password' onChange={handleUserdata} />
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

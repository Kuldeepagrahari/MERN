import React, { useEffect } from 'react'
import { useAuth } from '../storeContext/authContext'
import { Navigate } from 'react-router-dom'
const Logout = () => {

    const {logoutUser} = useAuth()
   
    logoutUser()
    return <Navigate to="/login"></Navigate>
    
}

export default Logout

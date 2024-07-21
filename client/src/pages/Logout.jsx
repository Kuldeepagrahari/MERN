import React, { useEffect } from 'react'
import { useAuth } from '../storeContext/authContext'
import
const Logout = () => {
    const {logoutUser} = useAuth()
 useEffect(logoutUser)
}

export default Logout

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()



// liscense h jo app ko dena padega jisse hum ye use kr sake, isme jo jo samaan h uski list honi chahiye ki hum ye ye childrens ko bhejenge
//gaadi
 export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    // saaman jo dena h
    const StoreTokenInLS = (token) => {
        console.log("stl")
        return  localStorage.setItem('token', token)
    }
    let isloggedIn = !!token
    
    const logoutUser = () => {
        setToken('')
        return localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{isloggedIn, logoutUser, StoreTokenInLS}}>
            {children}
        </AuthContext.Provider>
    )
  
}


//Captain bana dete hai jo samaan ja ja ke place karega 
// driver/delivery boy
//custom hook
export const useAuth = () => {
    const authContextvalue =  useContext(AuthContext)

    if ( !authContextvalue){
        throw new Error('useAuth must be used within AuthProvider')
    }
    return authContextvalue
}


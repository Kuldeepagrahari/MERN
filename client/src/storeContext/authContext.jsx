import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext()



// liscense h jo app ko dena padega jisse hum ye use kr sake, isme jo jo samaan h uski list honi chahiye ki hum ye ye childrens ko bhejenge
//gaadi
 export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [userdata, setUserdata ] = useState("")
    // saaman jo dena h
    const StoreTokenInLS = (token) => {
       // turant reg/login ke baad token ka state change hoona chahiye jisse isloggedin true ho aur logout turant dikhe
        setToken(token)
        return  localStorage.setItem('token', token)
    }
    let isloggedIn = !!token
    console.log('isloggedin' + isloggedIn)

    const logoutUser = () => {
        setToken('')
        return localStorage.removeItem('token')
    }
    const gettingUserData = async () =>{

        try{
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method:'GET',
                headers:{
                    "Authorization":token
                }
        
            })
            if ( response.ok ){
                const data = await response.json()
                setUserdata(data)
                console.log("data from authcontext" + data.email)
            }

            
        }catch(err){
            console.log(err)
        }
      
    }

    //jab token change ho to 
    useEffect(() => {
        if (token) {
            gettingUserData();
        }
    }, [token]);

    // useEffect(() => {
    //     const tokenn = localStorage.getItem('token')
    //     if (tokenn) {
    //       setToken(token);
    //     }
    //   }, []);

    return (
        <AuthContext.Provider value={{isloggedIn, logoutUser, StoreTokenInLS, userdata}}>
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


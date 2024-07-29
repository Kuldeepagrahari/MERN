import React, { useEffect, useState } from 'react'
import { useAuth } from '../storeContext/authContext'
import { toast } from 'react-toastify'
import { MdDelete } from "react-icons/md";
import { FiDelete } from "react-icons/fi";

const AdminUsers = () => {
    const {AuthorizationToken}  = useAuth()
    const [AllUserData, setAllUserData] = useState([])

    const fetchingAllUsers = async() => {
         try{
            const allUsersdataResponse = await fetch('http://localhost:5000/api/admin/users',{
                method:'GET',
                headers:{
                    Authorization:AuthorizationToken
                }
            })

            if(allUsersdataResponse.ok){
                const allUserdata = await allUsersdataResponse.json()
                setAllUserData(allUserdata)
                console.log('all user data' + AllUserData)
            }
         }catch(err){
            console.log(err)
         }
    }

    useEffect(()=>{
        fetchingAllUsers()
    },[])

    const deleteUser = async (id) =>{
        try{
          const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
            method:'DELETE',
            headers:{
                Authorization: AuthorizationToken
            }
          
          })
          console.log(response)

          if(response.ok){
            fetchingAllUsers()
            toast.success("user deleted Successfully")
          }else{
            toast.error("error in deleting the user")
          }
        }catch(err){
            console.log(err)
            toast.error("backend error")
        }
    }



  return (
    <div>
      <h1>users</h1>

      <table>
        <thead>
            <tr>
                <td>Username</td>
                <td>Email</td>
                <td>Phone</td>
               
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {
                AllUserData.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                          
                            <td><button style={{backgroundColor:"transparent", color:"orangered",border:"none", fontSize:"2vw"}} onClick={()=>deleteUser(user._id)}><FiDelete/></button></td>
                            </tr>
                    )
                })
            }
        </tbody>
      </table>

    </div>
  )
}

export default AdminUsers

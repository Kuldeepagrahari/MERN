import React, { useEffect, useState } from 'react'
import { useAuth } from '../storeContext/authContext'

const AdminUsers = () => {
    const {AuthorizationToken}  = useAuth()
    const [AllUserData, setAllUserData] = useState([])

    const fetchingAllUsers = async() => {
         try{
            const allUsersdataResponse = await fetch('http://localhost:5000/api/admin/users',{
                method:'GET',
                headers:{
                    'Authorization':AuthorizationToken
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

    const deleteUser = async () =>{
        try{
          await fetch('',{
            method:'DELETE'
          })
        }catch(err){
            console.log(err)
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
                <td>Update</td>
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
                            <td>Update</td>
                            <td><button onClick={()=>deleteUser(user._id)}></button></td>
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

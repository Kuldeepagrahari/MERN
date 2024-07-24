import React, { useEffect, useState } from 'react'
import { useAuth } from '../storeContext/authContext'


const AdminContacts = () => {
   const {AuthorizationToken} = useAuth()
   const [AllContacts, setAllContacts] = useState([])
   const fetchingContData = async () => {
    try{
        const AllContDataResponse = await fetch('http://localhost:5000/api/admin/contacts',{
            method:'GET',
            headers:{
                'Authorization':AuthorizationToken
            }
        })

        if(AllContDataResponse.ok){
            const AllContdata = await AllContDataResponse.json()
            setAllContacts(AllContdata)
            console.log(AllContacts)
        }else{
            console.log('error ')
        }
    }catch(err){
        console.log(err)
    }
   }
   useEffect(()=>{
    fetchingContData()
   },[])
// empty array dena padega nhi to baar baar fetch hota 
  return (
    <div>
      <h1>contacts</h1>
      <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Message</td>
                <td>Update</td>
                <td>Delete</td>

            </tr>
        </thead>

        <tbody>
            {
                AllContacts.map((contact, index)=>
                {
                    return(
                        <tr key={index}>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.message}</td>
                            {/* <td><button onClick={}>update</button></td>
                            <td><button onClick={()=>deleteUser()}></button></td> */}
                        </tr>
                    )
                })
            }
        </tbody>
      </table>


    </div>
  )
}

export default AdminContacts

import React, { useState } from 'react'
import { useAuth } from '../storeContext/authContext.jsx'
const Contact = () => {
  const {userdata} = useAuth()

 
  const [contdata, setContdata] = useState({
    name:"",
    email:"",
    message:""
  })

  // ek baar setContactdata call hone ke baad dobara call hone se rokne ke liye
  const [isNotset, setIsNotset] = useState(true)

  if ( isNotset && userdata){
     console.log(userdata)
     setContdata({name:userdata.username, email:userdata.email, message:"ram"})
     setIsNotset(false)
     console.log(contdata)
  }

  const handleContdata = (e) => {
    let name = e.target.name 
    let value = e.target.value 

    setContdata({
      ...contdata, [name]:value
    })
  }

  const handleSubmit  = async (e) => {
     e.preventDefault()
    //  console.log(contdata)
     console.log(userdata)
     const response = await fetch('http://localhost:5000/contact', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(contdata)
     })
     

     if ( response.ok ){
      const server_res_data = await response.json()
      setContdata({ message:""})
      alert(server_res_data.msg + ' Thankyou for your messaging , I will look into it as soon as possible')
      
     }
  }
  return (  
    <div className='contact'>
      <div className="cont-container">
     <div className="con-left">
       <img src="https://img.freepik.com/premium-vector/people-working-concept-illustration_958800-113324.jpg?size=626&ext=jpg&ga=GA1.1.1114204752.1718366789&semt=ais_user" alt="con-pic" />
     </div>
   
     <div className="con-right">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' value={userdata.username} onChange={handleContdata}/>
        <input type="email" placeholder='Email' name='email' value={userdata.email}onChange={handleContdata} autofill="off"/>
        <textarea name="message" id="" cols="25" rows="10" placeholder='Write your message from here' onChange={handleContdata}></textarea>
        <button type='submit'>Submit</button>
      </form>
      </div>
     </div>
     <div className="map"  style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5553269.316223444!2d80.946166!3d26.8466937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39852a9da3aa84ab%3A0x8e1a7ecf076e2a22!2sBari%20Urf%20Sarai%20Akil%2C%20Uttar%20Pradesh%20212216!5e1!3m2!1sen!2sin!4v1721471105864!5m2!1sen!2sin"
        width="965"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Embed"
      ></iframe>
     </div>
    </div>
  )
}

export default Contact

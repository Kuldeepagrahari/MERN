import React, { useState } from 'react'

const Contact = () => {

  const [contdata, setContdata] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleContdata = (e) => {
    let name = e.target.name 
    let value = e.target.value 

    setContdata({
      ...contdata, [name]:value
    })
  }

  const handleSubmit  = (e) => {
     e.preventDefault()
     console.log(contdata)
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
        <input type="text" placeholder='Name' name='name' onChange={handleContdata}/>
        <input type="email" placeholder='Email' name='email' onChange={handleContdata} autofill="off"/>
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

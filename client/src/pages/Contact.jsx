import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
     <div className="con-left">
       <img src="https://img.freepik.com/premium-vector/people-working-concept-illustration_958800-113324.jpg?size=626&ext=jpg&ga=GA1.1.1114204752.1718366789&semt=ais_user" alt="con-pic" />
     </div>
   
     <div className="con-right">
      <h1>Contact Me</h1>
      <form action="">
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <textarea name="message" id="" cols="25" rows="10" placeholder='Write your message from here'></textarea>
        <button type='submit'>Submit</button>
      </form>
     </div>
     
    </div>
  )
}

export default Contact

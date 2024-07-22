import React, { useEffect, useState } from 'react'

const Service = () => {
  const [servicedata, setServicedata] = useState([])
  const [isSet, setIsset] = useState(false)
  const ServiceDataProvider = async () => {
    const response = await fetch('http://localhost:5000/api/services', {
      method:'GET'
    })

    if ( response.ok){
      const data = await response.json()
      // setServicedata(data)
      if ( !isSet ){
        setServicedata(data)
        setIsset(true)
      }
      console.log("item: " + servicedata)
      

    }
  }

  useEffect(()=>{
    ServiceDataProvider(),[]
  })


  return (
    <div className='services'>
     
     <h1>My services & Blogs</h1>
     <div className="service-container">

     {
      servicedata.map((individualDoc, index) => {
        return (
          <div className="service-card" key={index}>
        <img src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901765.jpg?ga=GA1.1.1313162215.1721633016&semt=ais_user" alt="" />
        <div className="ser-card-info">
             <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}><h3 style={{color:"orange", fontSize:"1.5vw"}}>{individualDoc.topic}</h3> <a style={{color:"pink", textDecoration:"none"}}href={individualDoc.link}>Link</a></div>
             <p style={{height:"7vh"}}>{individualDoc.desc}

             </p>
             <button style={{width:"100%", backgroundColor:"green", color:"white", borderRadius:"5px", border:"none", padding:"1vh 1vw", marginTop:"2vh"}}>₹ {individualDoc.cost}</button>
        </div>
      </div>
        )
      })
     }

    
     </div>
    </div>
  )
}

export default Service

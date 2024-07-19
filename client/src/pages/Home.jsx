import React from 'react'
import {Link} from 'react-router-dom'
import my_pic from "../assets/pic1.jpg"
const Home = () => {
  return (
    <div className='home'>
      <div className="home-left">
        <h5>Welcome to </h5>
        <h1>SamTechnicals.</h1>
        <h4> Full Stack Developer </h4>
        <p> I Provide Best Possible Services Related to Web Development, DSA and Competitive Programming </p>
          <div className="home-links">
          <Link to="/services"><button>Explore Services</button></Link>
          <Link to="/about"><button>Know More About Me</button></Link>
     
          </div>
          <Link to="/contact"><button   id="home-cont-btn">Contact Me</button></Link>
           
      </div>
      <div className="home-right">
         <img src={my_pic} alt="my_pic" />
      </div>
    </div>
  )
}

export default Home

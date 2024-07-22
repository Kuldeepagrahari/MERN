import React, { useState } from 'react'
import my_pic from "../assets/pic1.jpg"
import { Link } from 'react-router-dom'
import { useAuth } from '../storeContext/authContext.jsx'
const About = () => {

  const {userdata} = useAuth()
  console.log(userdata)
  const [isNotset, setIsNotset] = useState(true)
  const [username, setusername] = useState("")

  if ( isNotset && userdata){
     console.log('about' + userdata)
     setusername(userdata.username)
     setIsNotset(false)
    
  }

  return (
    <>
    <h1 id="about-head">hey! <span style={{color:"pink", fontSize:"2.5vw"}}> {username}</span>, Hope your're Well good,  Thanks for Viewing my Profile </h1>
    <div className='about'>
      
     <div className="about-left">
          <div className="about-my-info">
       
            <div className="about-me-left">
              <img src={my_pic} alt="" />
            </div>
            <div className="about-me-right"> 
              <h4>Hi, I'm </h4>
              <h1>Kuldeep Agrahari</h1>
              <p>Persuing my Btech <span>(2022 - 26)</span>in <span>CSE</span> from </p>
              <h3>PDPM IIIT DM, Jabalpur</h3>
              <p>I Have great <span>PROBLEM SOLVING</span> Skills, Good at <span>Full Stack Development</span> and good at Core CS Subjects. You can Download my CV <Link to=""><button id="resume-btn">Resume</button></Link></p>
              <div className="about-me-cont">
                <h5><img src="https://img.icons8.com/?size=96&id=13800&format=png" alt="" /> Sarai Akil Kaushambi, Prayagraj, UP, India</h5>
                <div className="phone-email">
                  <h5><img src="https://img.icons8.com/?size=96&id=WV326xpsBMyb&format=png" alt="" /> 8957298885</h5>
                  <h5><img src="https://img.icons8.com/?size=160&id=eKlyMs0XteXZ&format=png" alt="" /> kuldeepagrahari9103@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="skills">
            <h1>My Skills</h1>
            <div className="skills-desc">
              <h5>Programming Languages: <span>C++, Javascript, Basics of Python & Java</span></h5>
              <h5>Technologies: <span>React Js, Node Js, Express Js, RESTful APIs', Frontend Development, Backend Development, Low Level Design</span></h5>
              <h5>Databases: <span>MongoDb, PostgreSQL, MySQL</span></h5>
              
            </div>
          </div>
          <div className="achievments skills">
              <h1>Achievments</h1>
              <div className="skills-desc">
              <h5> ⭐ ⭐ ⭐ Rating at <span>Codechef and GFG</span></h5>
              <h5>Solved 1000+ Coding problems at LeetCode , GFG, CodeStudio, COdeforces, Codechef</h5>
              <h5>Won <span>Postman Student Expert Badge</span></h5>
              
              
            </div>
          </div>
          <div className="links skills">
            <h1>Follow Me At</h1>
              <div className="skills-desc">
                <h5><Link to="https://github.com/Kuldeepagrahari"><img src="https://img.icons8.com/?size=128&id=52539&format=png" alt="git" /> GitHub</Link></h5>
                <h5><Link to="https://www.linkedin.com/in/kuldeep-agrahari-56b159260/"><img src="https://img.icons8.com/?size=128&id=44019&format=png" alt="" /> LinkedIn</Link></h5>
                <h5><Link to="https://twitter.com/kuldeep_106"><img src="https://img.icons8.com/?size=96&id=TJX3x8NCUkFN&format=png" alt="" /> Twitter</Link></h5>
              </div>
          </div>
     </div>
     <div className="about-right">
    
     
     <h1>My Projects</h1>
     <div className="service-container">
      <div className="service-card">
        <img src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" alt="" />
        <div className="ser-card-info">
            <span><h3>Title</h3> <Link to=""><img src="https://img.icons8.com/?size=160&id=xPX4qmtKvtBp&format=png" alt="" />repo</Link></span> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure officiis ipsum 

             </p>
        </div>
      </div>
      <div className="service-card">
        <img src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" alt="" />
        <div className="ser-card-info">
        <span><h3>Title</h3> <Link to=""><img src="https://img.icons8.com/?size=160&id=bxwYtpFxQSxq&format=png" alt="" />github repo</Link></span> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure officiis ipsum 

             </p>
        </div>
      </div>
      <div className="service-card">
        <img src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" alt="" />
        <div className="ser-card-info">
        <span><h3>Title</h3> <Link to=""><img src="https://img.icons8.com/?size=128&id=48181&format=png" alt="" />github repo</Link></span> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure officiis ipsum 

             </p>
        </div>
      </div>
      <div className="service-card">
        <img src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" alt="" />
        <div className="ser-card-info">
        <span><h3>Title</h3> <Link to=""><img src="https://img.icons8.com/?size=128&id=48181&format=png" alt="" />github repo</Link></span> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure officiis ipsum 

             </p>
        </div>
      </div>
      <div className="service-card">
        <img src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" alt="" />
        <div className="ser-card-info">
        <span><h3>Title</h3> <Link to=""><img src="https://img.icons8.com/?size=128&id=48181&format=png" alt="" />github repo</Link></span> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure officiis ipsum 

             </p>
        </div>
      </div>
      <div className="service-card">
        <img src="https://img.icons8.com/?size=128&id=D47p6uA2kE9C&format=png" alt="" />
        <div className="ser-card-info">
        <span><h3>Title</h3> <Link to=""><img src="https://img.icons8.com/?size=128&id=48181&format=png" alt="" />github repo</Link></span> 
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam iure officiis ipsum 

             </p>
        </div>
      </div>
 
    </div>
     </div>
     

    
    </div>
    </>
  )
}

export default About

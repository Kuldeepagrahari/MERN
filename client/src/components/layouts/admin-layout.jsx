import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser, FaHome , FaRegListAlt} from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { VscGithubProject } from "react-icons/vsc";
import "./admin.css"
const AdminLayout = () => {
  return (
    <div className='admin' style={{position:"relative", top:"2vh", left:"0vw"}}>
        
      <header className='admin-nav'>
      
        <ul>
            <NavLink to="/admin"><li style={{fontSize:"3vw"}}><FaHome/> Admin </li></NavLink>
            <NavLink to="/admin/users"><li><FaUser/> All Users</li></NavLink>
            <NavLink to="/admin/contacts"><li> <BiSolidContact/> All Contacts</li></  NavLink>
            <NavLink to="/admin/project"><li><VscGithubProject/> All Projects</li></NavLink>
            <NavLink to="/admin/service"><li><FaRegListAlt/> All Services</li></NavLink>
        </ul>
      </header>
      <Outlet/>
      {/* Outlet likha to hi nested route allow hua */}
    </div>
  )
}

export default AdminLayout

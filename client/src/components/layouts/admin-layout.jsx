import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser, FaHome , FaRegListAlt} from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import { VscGithubProject } from "react-icons/vsc";
const AdminLayout = () => {
  return (
    <div>
        
      <header>
        <h1>Admin Panel</h1> 
        <ul>
            <NavLink to="/admin"><li><FaHome/> Admin Home</li></NavLink>
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

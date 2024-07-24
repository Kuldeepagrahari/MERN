import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Service from "./pages/Service.jsx"
import Contact from "./pages/Contact.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import Error from "./pages/Error.jsx"
import Logout from "./pages/Logout.jsx"
import {Routes, Route} from "react-router-dom"

import "./index.css"   
import AdminLayout from "./components/layouts/admin-layout.jsx"
import AdminContacts from "./pages/AdminContacts.jsx"
import AdminUsers from "./pages/AdminUsers.jsx"
import AdminAddProject from "./pages/AdminAddProject.jsx"
import AdminAddService from "./pages/AdminAddService.jsx"

function App() {

  
  return (
    <div className="app">
      <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Service/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="*" element={<Error/>}></Route>
      <Route path="/admin" element={<AdminLayout/>}>
         <Route path="contacts" element={<AdminContacts></AdminContacts>}/>
         <Route path="users" element={<AdminUsers></AdminUsers>}/>
         <Route path="project" element={<AdminAddProject/>}/>
         <Route path="service" element={<AdminAddService/>}/>

      </Route>
    </Routes>
       
    </div>
  )
}

export default App

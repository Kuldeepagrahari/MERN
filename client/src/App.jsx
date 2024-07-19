import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Service from "./pages/Service.jsx"
import Contact from "./pages/Contact.jsx"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Navbar from "./components/Navbar.jsx"
import {Routes, Route} from "react-router-dom"

import "./index.css"   

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
    </Routes>
       
    </div>
  )
}

export default App

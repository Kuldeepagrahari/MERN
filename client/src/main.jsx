import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import {AuthProvider} from "./storeContext/authContext.jsx"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./main.css"
ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <AuthProvider>
    <App />
    <ToastContainer
    
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
bodyClassName="toastifyStyle"
/>
    </AuthProvider>
  </BrowserRouter>

)

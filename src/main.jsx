import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Coordinator from './Coordinator.jsx'
import CustomerLogin from './CustomerLogin.jsx'
import AdminLogin from './AdminLogin.jsx'
import CooLogin from './CooLogin.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CustomerLogin/> */}
    {/* <Coordinator/> */}
    {/* <AdminLogin/> */}
    <CooLogin/>
  </React.StrictMode>,
)

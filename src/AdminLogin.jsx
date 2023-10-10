
import React, { useState } from "react";
import Data from "./data.json"
import "./login.css"
import image from "./images/admin.png"

export default function AdminLogin() {
  const admins = Data.admins;
  const [adminDetails, setAdminDetails] = useState({
    userName: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    admins.forEach(admin => {
        if (admin.username == adminDetails.userName && admin.password == adminDetails.password){
            //link the necessary page here(cutomer page)
            alert("welcome")
            return;
        }
    }); 
    
    
    
  };

  return (
    <div className="login-form">
      <img className="login-image" src={image}></img>
      <h3>ADMIN LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="usrname">
          <label className='login-label' htmlFor="userName">Username:</label><br></br>
          <input
          className="login-input"
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            value={adminDetails.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='login-label' htmlFor="password">Password:</label><br></br>
          <input
           className="login-input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={adminDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

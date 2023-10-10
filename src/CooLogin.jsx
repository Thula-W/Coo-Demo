
import React, { useState } from "react";
import Data from "./data.json"
import "./login.css"
import image from "./images/logistic.png"

export default function CooLogin() {
  const coordinators = Data.coordinators;
  const [cooDetails, setCooDetails] = useState({
    userName: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCooDetails({
      ...cooDetails,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    coordinators.forEach(coo => {
        if (coo.username == cooDetails.userName && coo.password == cooDetails.password){
            //link the necessary page here(coo page)
            alert("welcome")
            return;
        }
    }); 
    
    
    
  };

  return (
    <div className="login-form">
      <img className="login-image" src={image}></img>
      <h3>COORDINATOR LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="usrname">
          <label className='login-label' htmlFor="userName">Username:</label><br></br>
          <input
          className="login-input"
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            value={cooDetails.userName}
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
            value={cooDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

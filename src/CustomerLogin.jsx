
import React, { useState } from "react";
import Data from "./data.json"
import "./login.css"
import image from "./images/customer.png"

export default function CustomerLogin() {
  const customers = Data.customers;
  const [customerDetails, setCustomerDetails] = useState({
    userName: "",
    password: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails({
      ...customerDetails,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    customers.forEach(customer => {
        if (customer.username == customerDetails.userName && customer.password == customerDetails.password){
            //link the necessary page here(cutomer page)
            alert("welcome")
            return;
        }
    }); 
    
    
    
  };

  return (
    <div className="login-form">
      <img className="login-image" src={image}></img>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
        <div className="usrname">
          <label className='login-label' htmlFor="userName">Username:</label><br></br>
          <input
          className="login-input"
            type="text"
            id="userName"
            name="userName"
            placeholder="Username"
            value={customerDetails.userName}
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
            value={customerDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
      <h4>Don't have account ?</h4>
      {/* add the signup page link here  */}
    </div>
  );
}

import React, { useState } from 'react';
import './Signin.css';
import {  Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
const nav=useNavigate();
  const authenticate = (e) => {
    e.preventDefault(); 
    if (email.length === 0 || password.length === 0) {
      alert('Please enter all fields');
    } else if (password.length < 8) {
      alert('Password should be at least eight characters long');
    }
    if(password ==='admin12345')
    {
      nav("/admindash")
    }
     else {
      setLoggedIn(true);
    }
  };
  if (loggedIn) {
    // Redirect to userdash if logged in
    return <Navigate to="/userdash" replace />;
  }


  return (
    <div>
    <Navbar></Navbar>
      <div className="Adminimg">
      <h2 className="imgtag">Take Your Agriculture Into Next Level !</h2>
      <img className="bg" src="https://navi.com/blog/wp-content/uploads/2022/06/Agriculture-Loan-Guide.jpg"/>
        <div className="Adminmain">
          <h1 className="Admintitle">Welcome Back!</h1>
          <h3 className="Admintitle2">Login to your account</h3>
          <input
            className="Adminemail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Adminpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a  id="forgot-passwd">
        Forgot Password?
      </a>
          <input
            onClick={authenticate}
            className="Adminsubmit"
            type="submit"
            value="Login"
          />
          <p className="signn">
      Don't have an account? <a href="#">Sign Up</a>.
    </p>
        </div>
      </div>
    </div>
  );
}
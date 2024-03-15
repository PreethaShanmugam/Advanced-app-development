import React, { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault(); 
    if (email.length === 0 || password.length === 0) {
      alert('Please enter all fields');
    } else if (password.length < 8) {
      alert('Password should be at least eight characters long');
    } else {

    }
  };

  return (
    <div>
      <div className="img">
        <div className="main">
          <h1 className="title">Get Started!</h1>
          <h3 className="title2">Create your account</h3>
          <input
            className="name"
            type="text"
            placeholder="Name"/>
          <input
            className="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
          className="mobilenum"
          type="text"
          placeholder="Mobilenumber"/>
          
          <input
            onClick={authenticate}
            className="submit"
            type="submit"
            value="Signup"
          />
          <p className="signup">
      Already have an account? <a href="#">Login</a>.
    </p>
        </div>
      </div>
    </div>
  );
}
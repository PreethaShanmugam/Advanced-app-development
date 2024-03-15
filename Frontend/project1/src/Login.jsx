import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div  className="Loginback">
    <img className="bg" src=""/>
    <div className="container">
  <div className="well">
    <form action="#" method="post">
        <h1 className="welcome1">Welcome Back</h1>
       
      <div>
        <input
          type="text"
          name="login-username"
          id="login-username"
          required=""
        />
        <label htmlFor="login-username">Username</label>
      </div>
      <div>
        <input
          type="password"
          name="login-passwd"
          id="login-passwd"
          required=""
        />
        <label htmlFor="login-passwd">Password</label>
      </div>
      
      <button className="button" id="btn-submit">
        <span className="button-text">Log In</span>
        <div className="button-loader">
          <div />
          <div />
          <div />
        </div>
      </button>
    </form>
    <p>
      Don't have an account? <a href="#">Sign Up</a>.
    </p>
  </div>
  
</div>
</div>
  );
}

import React from 'react';
import './Userdash.css'; // Import CSS file for styling
import Navbar from './Navbar';
import Loanuser from './Loansuser';
import Admin from './Admin';

const Admindash = () => {
  return (
    <>
    <Navbar></Navbar>
    <Admin></Admin>
    <div className="dashboard">
    <div className="dashboard-container">
      <img src="https://static.vecteezy.com/system/resources/previews/005/051/237/non_2x/the-bank-gives-a-loan-to-a-businessman-for-business-development-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="Image1" className="dashboard-image" />
      <div className="dashboard-text">
        <p>Total users</p>
        <p className="num">200000</p>
      </div>
    </div>
    <div className="dashboard-gap"></div>
    <div className="dashboard-container">
      <img src="https://static.vecteezy.com/system/resources/previews/005/051/237/non_2x/the-bank-gives-a-loan-to-a-businessman-for-business-development-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="Image2" className="dashboard-image" />
      <div className="dashboard-text">
        <p>Total banks</p>
        <p className="num">7</p>
      </div>
    </div>
    <div className="dashboard-gap"></div>
    <div className="dashboard-container">
      <img src="https://static.vecteezy.com/system/resources/previews/005/051/237/non_2x/the-bank-gives-a-loan-to-a-businessman-for-business-development-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="Image3" className="dashboard-image" />
      <div className="dashboard-text">
        <p>Total Schemes</p>
        <p className="num">100</p>
      </div>
    </div>
  </div>
  <div className="position">
  </div>
  </>
  );
};

export default Admindash;

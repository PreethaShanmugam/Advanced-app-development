import React from 'react';
import './Userdash.css'; // Import CSS file for styling
import Navbar from './Navbar';
import User from './User';
import Loanuser from './Loansuser';

const Userdash = () => {
  return (
    <>
    <Navbar></Navbar>
    <User></User>
    <div className="dashboard">
    <div className="dashboard-container">
      <img src="https://static.vecteezy.com/system/resources/previews/005/051/237/non_2x/the-bank-gives-a-loan-to-a-businessman-for-business-development-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="Image1" className="dashboard-image" />
      <div className="dashboard-text">
        <p>Total amount borrowed</p>
        <p className="num">200000</p>
      </div>
    </div>
    <div className="dashboard-gap"></div>
    <div className="dashboard-container">
      <img src="https://static.vecteezy.com/system/resources/previews/005/051/237/non_2x/the-bank-gives-a-loan-to-a-businessman-for-business-development-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="Image2" className="dashboard-image" />
      <div className="dashboard-text">
        <p>Total number of repayments done</p>
        <p className="num">0</p>
      </div>
    </div>
    <div className="dashboard-gap"></div>
    <div className="dashboard-container">
      <img src="https://static.vecteezy.com/system/resources/previews/005/051/237/non_2x/the-bank-gives-a-loan-to-a-businessman-for-business-development-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg" alt="Image3" className="dashboard-image" />
      <div className="dashboard-text">
        <p>Total repayments pending</p>
        <p className="num">1</p>
      </div>
    </div>
  </div>
  <div className="position">
  <Loanuser></Loanuser>
  </div>
  </>
  );
};

export default Userdash;

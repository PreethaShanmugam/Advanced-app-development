import React from 'react';
import './Application.css'; // Import CSS file for styling
import Navbar from './Navbar';
import User from './User';

const Application = () => {
  return (
    <>
      <Navbar />
      <User />
      <div className="container">
        <div className="form-container">
          <h1 className="form-heading">Application Form</h1>
          <form className="form">
            <div className="form-group">
            <h2 className="section-heading">Personal Details</h2>
              <input type="text" placeholder="Name" className="input-field2" />
              <input type="email" placeholder="Email" className="input-field2" />
              <input type="text" placeholder="Mobile Number" className="input-field2" />
              <input type="text" placeholder="Address" className="input-field2" />
              <input type="text" placeholder="District" className="input-field2" />
              <input type="text" placeholder="Date of birth" className="input-field2" />
              <input type="text" placeholder="Female/Male" className="input-field2" />
              <input type="text" placeholder="Father's name" className="input-field2" />
              <input type="text" placeholder="Community" className="input-field2" />
              <input type="text" placeholder="Religion" className="input-field2" />
              <input type="text" placeholder="Aadhaar Number" className="input-field2" />
              <input type="text" placeholder="PAN Number" className="input-field2" />
              
            </div>
            <div className="form-group">
            <h2 className="section-heading">Loan Details</h2>
              <input type="text" placeholder="Loan Amount" className="input-field2" />
              <input type="text" placeholder="Loan Duration (months)" className="input-field2" />
              <select className="input-field2" defaultValue="" required>
                <option value="" disabled hidden>Select Loan Type</option>
                <option value="Personal Loan">Crop Loan</option>
                <option value="Business Loan">Land Loan</option>
                <option value="Agricultural Loan">Tractor Loan</option>
              </select>
              {/* Add more input/select fields for loan details */}
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Application;

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faFileArchive, faCoins } from '@fortawesome/free-solid-svg-icons';
import './Admin.css';
import Navbar from './Navbar';

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="sidebar">
        <div className="sidebar-profile">
          <img src="https://nregsmp.org/eService/images/User.png" alt="Profile" className="profile-image1" />
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to="/admindash" className="sidebar-link">
                <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
                <span className="sidebar-text">Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/loansadmin" className="sidebar-link">
                <FontAwesomeIcon icon={faFileAlt} className="sidebar-icon" />
                <span className="sidebar-text">Loans</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/banksadmin" className="sidebar-link">
                <FontAwesomeIcon icon={faFileArchive} className="sidebar-icon" />
                <span className="sidebar-text">Banks</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link to="/users" className="sidebar-link">
                <FontAwesomeIcon icon={faCoins} className="sidebar-icon" />
                <span className="sidebar-text">Users</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Admin;

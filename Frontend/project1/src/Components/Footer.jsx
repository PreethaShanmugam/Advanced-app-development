import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom'; // Import Link

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <li className="footer-list-item">
            <Link to="/privacy" className="footer-link">
              Privacy policy
            </Link>
          </li>
          <li className="footer-list-item">
            <Link to="/Terms" className="footer-link">
              Terms and conditions
            </Link>
          </li>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/Aboutt" className="footer-link">
                About us
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/contact" className="footer-link">
                Contact us
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/faq" className="footer-link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link to="/Aboutt" className="footer-link">
                Loan Products
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/contact" className="footer-link">
                EMI Calculator
              </Link>
            </li>
            <li className="footer-list-item">
              <Link to="/faq" className="footer-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        
       </div>
      <p className="copyright">© 2023 All Rights Reserved</p>
    </footer>
  );
}
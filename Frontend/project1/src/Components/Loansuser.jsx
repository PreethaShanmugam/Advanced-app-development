import React from 'react';
import { Link } from 'react-router-dom';
import './Loansuser.css';
import User from './User';

const DummyData = [
  {
    id: 1,
    status: 'Pending',
    fullName: 'John Doe',
    amount: '$1000',
    bank: 'Bank of America',
    applicationDate: '2024-03-19'
  },
  {
    id: 2,
    status: 'Approved',
    fullName: 'Jane Smith',
    amount: '$1500',
    bank: 'Chase Bank',
    applicationDate: '2024-03-18'
  },
  {
    id: 3,
    status: 'Rejected',
    fullName: 'Michael Johnson',
    amount: '$500',
    bank: 'Wells Fargo',
    applicationDate: '2024-03-17'
  }
];

const Loanuser = () => {
  return (
    <>
    <User></User>
    <div>
    <h2>Loans Summary</h2>
      <table className="application-table">
        <thead>
          <tr>
            <th>Application id</th>
            <th>Status</th>
            <th>Full Name</th>
            <th>Amount</th>
            <th>Bank</th>
            <th>Application Date</th>
          </tr>
        </thead>
        <tbody>
          {DummyData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.status}</td>
              <td>{data.fullName}</td>
              <td>{data.amount}</td>
              <td>{data.bank}</td>
              <td>{data.applicationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/application" className="new-application-btn">New Application Form</Link>
    </div>
    </>
  );
};

export default Loanuser;

import React from 'react';
import { Link } from 'react-router-dom';
import './Loansuser.css';
import Admin from './Admin';

const DummyData = [
  {
    id: 1,
    status: 'Pending',
    fullName: 'John Doe',
    amount: '$1000',
    bank: 'Bank of America',
    applicationDate: '2024-03-19',
    Action1:'Approve',
    Action:'Reject'
  },
  {
    id: 2,
    status: 'Approved',
    fullName: 'Jane Smith',
    amount: '$1500',
    bank: 'Chase Bank',
    applicationDate: '2024-03-18',
    Action1:'Approve',
    Action:'Reject'
  },
  {
    id: 3,
    status: 'Rejected',
    fullName: 'Michael Johnson',
    amount: '$500',
    bank: 'Wells Fargo',
    applicationDate: '2024-03-17',
    Action1:'Approve',
    Action:'Reject'
  }
];

const Loansadmin = () => {
  return (
    <>
    <Admin></Admin>
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
            <th>Action</th>
            <th>Action</th>
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
              <td><button className="action-button red-button">{data.Action1}</button></td>
              <td><button className="action-button red-button">{data.Action}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Loansadmin;

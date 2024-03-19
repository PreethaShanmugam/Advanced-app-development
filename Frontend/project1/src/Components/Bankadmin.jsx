import React from 'react';
import { Link } from 'react-router-dom';
import './Loansuser.css';
import Admin from './Admin';

const DummyData = [
  {
    id: 45,
    status: 'Bank1',
    fullName: '2',
    amount: 'ADD',
    bank: 'DELETE',
  },
  {
    id: 2,
    status: 'Bank2',
    fullName: '5',
    amount: 'ADD',
    bank: 'DELETE'
  },
  {
    id: 3,
    status: 'Bank3',
    fullName: '7',
    amount: 'ADD',
    bank: 'DELETE'
  }
];

const Bankadmin = () => {
  return (
    <>
    <Admin></Admin>
    <div>
    <h2>Bank Details</h2>
      <table className="application-table">
        <thead>
          <tr>
          <th>Users</th>
            <th>BankName</th>
            <th>Schemes</th>
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
              <td><button className="action-button red-button">{data.amount}</button></td>
              <td><button className="action-button red-button">{data.bank}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Bankadmin;

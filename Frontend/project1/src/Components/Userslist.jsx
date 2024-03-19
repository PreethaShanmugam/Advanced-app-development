import React from 'react';
import { Link } from 'react-router-dom';
import './Loansuser.css';
import Admin from './Admin';

const DummyData = [
  {
    id: 45,
    status: 'john',
    fullName: 'pree@gmail.com',
    role:'user',
    bank: 'DELETE',
  },
  {
    id: 2,
    status: 'sabari',
    fullName: 'sabari@gmail.com',
    role:'user',
    bank: 'DELETE'
  },
  {
    id: 3,
    status: 'suji',
    fullName: 'suji@gmail.com',
    role:'user',
    bank: 'DELETE'
  }
];

const Userslist = () => {
  return (
    <>
    <Admin></Admin>
    <div>
    <h2>Bank Details</h2>
      <table className="application-table">
        <thead>
          <tr>
          <th>ID</th>
          <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {DummyData.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.status}</td>
              <td>{data.fullName}</td>
              <td>{data.role}</td>
              <td><button className="action-button red-button">{data.bank}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Userslist;

import React from 'react';
import Client from './Client';

const ClientList = ({ clients }) => {
  return (
    <div className='container ClientList'>
      <h2>Client Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Privleges</th>
            <th>Payment Plan</th>
            <th>Comments</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, i) => (
            <Client key={i} client={client} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;

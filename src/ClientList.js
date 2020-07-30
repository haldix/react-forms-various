import React, { useContext } from 'react';
import Client from './Client';
import { ClientContext } from './ClientContext';
import Modal from './Modal';

const ClientList = () => {
  const { clients, isEditing } = useContext(ClientContext);

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
          {clients &&
            clients.map((client, i) => <Client key={i} client={client} />)}
        </tbody>
      </table>
      {isEditing && <Modal />}
    </div>
  );
};

export default ClientList;

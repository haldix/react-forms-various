import React from 'react';
import Client from './Client';

const ClientList = ({ clients, setClients, delClient, editClient }) => {
  const clearAll = () => {
    // eslint-disable-next-line
    let cnfrm = confirm('Delete all data for all clients?');
    if (!cnfrm) return;
    setClients([]);
  };
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
            clients.map((client, i) => (
              <Client
                key={i}
                client={client}
                delClient={delClient}
                editClient={editClient}
              />
            ))}
        </tbody>
      </table>
      <div className='ClientList__btn-cont'>
        <button className='btn-alert ClientList__btn-clear' onClick={clearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default ClientList;

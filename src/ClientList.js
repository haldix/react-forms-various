import React from 'react';
import Client from './Client';

const ClientList = (props) => {
  const { clients, confirmDelClient, editClient, confirmClearAll } = props;

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
                confirmDelClient={confirmDelClient}
                editClient={editClient}
              />
            ))}
        </tbody>
      </table>
      {clients.length !== 0 && (
        <div className='ClientList__btn-cont'>
          <button
            className='btn-alert ClientList__btn-clear'
            onClick={() => confirmClearAll()}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientList;

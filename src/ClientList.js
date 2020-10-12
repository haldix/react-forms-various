import React from 'react';
import Client from './Client';
import Form from './Form';

const ClientList = ({
  clients,
  setClients,
  addClient,
  delClient,
  editClient,
  isEditing,
  clientToEdit,
}) => {
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
      {clients.length !== 0 && (
        <div className='ClientList__btn-cont'>
          <button
            className='btn-alert ClientList__btn-clear'
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      )}

      {isEditing && <Form addClient={addClient} initVal={clientToEdit} />}
    </div>
  );
};

export default ClientList;

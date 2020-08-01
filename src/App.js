import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.scss';
import FormDoc from './FormDoc';
import ClientList from './ClientList';

const initVal = {
  firstName: '',
  lastName: '',
  age: '',
  gender: 'male',
  dining: false,
  fitness: false,
  pool: false,
  payment: 'Lifetime',
  comments: '',
  id: '',
};

function App() {
  const [clientToEdit, setClientToEdit] = useState(initVal);
  const [clients, setClients] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  function addClient(data) {
    if (isEditing) {
      let newClients = clients.filter((client) => client.id !== data.id);
      setClients([...newClients, { ...data }]);
      setIsEditing(false);
    } else {
      setClients([...clients, { ...data, id: uuid() }]);
    }
  }

  function delClient(id) {
    setClients(clients.filter((client) => client.id !== id));
  }

  function editClient(id) {
    setIsEditing(true);
    let foundClient = clients.find((client) => client.id === id);
    setClientToEdit(foundClient);
  }

  return (
    <div className='App'>
      <FormDoc
        clients={clients}
        addClient={addClient}
        clientToEdit={clientToEdit}
      />
      <ClientList
        clients={clients}
        delClient={delClient}
        editClient={editClient}
      />
    </div>
  );
}

export default App;

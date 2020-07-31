import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.scss';
import FormDoc from './FormDoc';
import ClientList from './ClientList';

function App() {
  const [clients, setClients] = useState([]);
  //const [isEditing, setIsEditing] = useState(false);

  function addClient(data) {
    setClients([...clients, { ...data, id: uuid() }]);
  }

  function delClient(id) {
    setClients(clients.filter((client) => client.id !== id));
  }

  //function editClient() {}

  return (
    <div className='App'>
      <FormDoc clients={clients} addClient={addClient} />
      <ClientList clients={clients} delClient={delClient} />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.scss';
import FormDoc from './FormDoc';
import ClientList from './ClientList';
import NavBar from './NavBar';

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

const clientsVal = JSON.parse(localStorage.getItem('clients')) || [];

function App() {
  const [clientToEdit, setClientToEdit] = useState(initVal);
  const [clients, setClients] = useState(clientsVal);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  function addClient(data) {
    if (isEditing) {
      let newClients = clients.filter((client) => client.id !== data.id);
      setClients([...newClients, { ...data }]);
      setIsEditing(false);
    } else {
      setClients([...clients, { ...data, id: uuid() }]);
    }
    setClientToEdit(initVal);
    alert('Client Data Saved');
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
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <FormDoc clients={clients} addClient={addClient} initVal={initVal} />
        </Route>
        <Route exact path='/clients'>
          <ClientList
            clients={clients}
            setClients={setClients}
            addClient={addClient}
            delClient={delClient}
            editClient={editClient}
            isEditing={isEditing}
            clientToEdit={clientToEdit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

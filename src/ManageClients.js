import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import SignUpForm from './SignUpForm';
import ClientList from './ClientList';
import { ModalContext } from './ModalContext';
import Form from './Form';

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

const ManageClients = () => {
  const [clientToEdit, setClientToEdit] = useState(initVal);
  const [clients, setClients] = useState(clientsVal);
  const [isEditing, setIsEditing] = useState(false);
  const { openModal, closeModal } = useContext(ModalContext);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  function addClient(data) {
    if (isEditing) {
      let newClients = clients.filter((client) => client.id !== data.id);
      setClients([...newClients, { ...data }]);
      setIsEditing(false);
      setClientToEdit(initVal);
      closeModal();
    } else {
      setClients([...clients, { ...data, id: uuid() }]);
    }
    openModal(<p>Your information has been saved.</p>);
  }

  function editClient(id) {
    setIsEditing(true);
    let foundClient = clients.find((client) => client.id === id);
    setClientToEdit(foundClient);
  }

  useEffect(() => {
    isEditing &&
      openModal(<Form initVal={clientToEdit} addClient={addClient} />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientToEdit]);

  function confirmDelClient(id) {
    openModal(
      <>
        <p>Confirm delete Client?</p>{' '}
        <button className='btn-alert' onClick={() => delClient(id)}>
          Delete
        </button>
      </>
    );
  }

  function delClient(id) {
    setClients(clients.filter((client) => client.id !== id));
    closeModal();
  }

  function confirmClearAll() {
    openModal(
      <>
        <p>Confirm delete all clients?</p>{' '}
        <button className='btn-alert' onClick={() => clearAll()}>
          Delete All
        </button>
      </>
    );
  }

  function clearAll() {
    setClients([]);
    closeModal();
  }

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <SignUpForm
            clients={clients}
            addClient={addClient}
            initVal={initVal}
          />
        </Route>
        <Route exact path='/clients'>
          <ClientList
            clients={clients}
            confirmDelClient={confirmDelClient}
            confirmClearAll={confirmClearAll}
            editClient={editClient}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default ManageClients;

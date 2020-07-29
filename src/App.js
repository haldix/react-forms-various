import React, { useState, useEffect } from 'react';
import './App.scss';
import FormDoc from './FormDoc';
import ClientList from './ClientList';

const initClients = JSON.parse(localStorage.getItem('clients')) || [];

function App() {
  const [clients, setClients] = useState(initClients);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const handleData = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div className='App'>
      <FormDoc handleData={handleData} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;

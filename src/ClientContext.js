import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const ClientContext = createContext();

const initClients = JSON.parse(localStorage.getItem('clients')) || [];

const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState(initClients);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const addClient = (newClient) => {
    setClients([...clients, { ...newClient, id: uuid() }]);
  };

  const delClient = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  const editClient = (id) => {
    setIsEditing(true);
  };

  return (
    <ClientContext.Provider
      value={{ clients, addClient, delClient, editClient, isEditing }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;

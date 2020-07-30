import React from 'react';
import './App.scss';
import FormDoc from './FormDoc';
import ClientList from './ClientList';
import ClientProvider from './ClientContext';
import ModalProvider from './ModalContext';

function App() {
  return (
    <div className='App'>
      <ClientProvider>
        <FormDoc />
        <ModalProvider>
          <ClientList />
        </ModalProvider>
      </ClientProvider>
    </div>
  );
}

export default App;

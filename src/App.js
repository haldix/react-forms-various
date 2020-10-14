import React from 'react';
import './App.scss';
import NavBar from './NavBar';
import Modal from './Modal';
import ModalProvider from './ModalContext';
import ManageClients from './ManageClients';

function App() {
  return (
    <div className='App'>
      <ModalProvider>
        <NavBar />
        <ManageClients />
        <Modal />
      </ModalProvider>
    </div>
  );
}

export default App;

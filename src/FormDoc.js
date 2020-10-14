import React from 'react';
import Form from './Form';

const FormDoc = ({ clients, addClient, initVal }) => {
  return (
    <div className='container'>
      <h2>Sign Up Today!</h2>
      <Form initVal={initVal} addClient={addClient} />
    </div>
  );
};

export default FormDoc;

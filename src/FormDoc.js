import React from 'react';
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

const FormDoc = ({ clients, addClient }) => {
  return (
    <div className='container'>
      <h2>Sign Up Today!</h2>
      <Form initVal={initVal} addClient={addClient} />
    </div>
  );
};

export default FormDoc;

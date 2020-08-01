import React, { useState, useEffect } from 'react';
//import useForm from './useForm';

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

const FormDoc = ({ clients, addClient, clientToEdit }) => {
  const [data, setData] = useState(clientToEdit);

  useEffect(() => {
    setData(clientToEdit);
  }, [clientToEdit]);

  const handleChange = (e) => {
    let val;
    e.target.type === 'checkbox'
      ? (val = e.target.checked)
      : (val = e.target.value);

    setData({ ...data, [e.target.name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(data);
    alert('Client Data Saved');
    setData(initVal);
  };

  return (
    <div className='container'>
      <h2>Sign Up Today!</h2>
      <form className='form-main' onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor='first-name' className='label'>
            First Name
          </label>
          <input
            type='text'
            id='first-name'
            name='firstName'
            className='input-field'
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='last-name' className='label'>
            Last Name
          </label>
          <input
            type='text'
            id='last-name'
            name='lastName'
            className='input-field'
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='age' className='label'>
            Age
          </label>
          <input
            type='number'
            id='age'
            name='age'
            className='input-field'
            value={data.age}
            onChange={handleChange}
          />
        </div>
        <fieldset>
          <legend>Gender: </legend>
          <div className='input-group'>
            <label htmlFor='gender-male' className='label'>
              <input
                type='radio'
                id='gender-male'
                name='gender'
                className='radio-btn'
                value='male'
                checked={data.gender === 'male'}
                onChange={handleChange}
              />
              male
            </label>
          </div>
          <div className='input-group'>
            <label htmlFor='gender-female' className='label'>
              <input
                type='radio'
                id='gender-female'
                name='gender'
                className='radio-btn'
                value='female'
                checked={data.gender === 'female'}
                onChange={handleChange}
              />
              female
            </label>
          </div>
          <div className='input-group'>
            <label htmlFor='gender-undecided' className='label'>
              <input
                type='radio'
                id='gender-undecided'
                name='gender'
                className='radio-btn'
                value='undecided'
                checked={data.gender === 'undecided'}
                onChange={handleChange}
              />
              undecided
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Privleges</legend>
          <div className='input-group'>
            <label htmlFor='dining' className='label'>
              <input
                type='checkbox'
                id='dining'
                name='dining'
                className='checkbox'
                //value={data.dining}
                checked={data.dining}
                onChange={handleChange}
              />
              Dining Room
            </label>
          </div>
          <div className='input-group'>
            <label htmlFor='fitness' className='label'>
              <input
                type='checkbox'
                id='fitness'
                name='fitness'
                className='checkbox'
                checked={data.fitness}
                onChange={handleChange}
              />
              Fitness Center
            </label>
          </div>

          <div className='input-group'>
            <label htmlFor='pool' className='label'>
              <input
                type='checkbox'
                id='pool'
                name='pool'
                className='checkbox'
                checked={data.pool}
                onChange={handleChange}
              />
              Swimming Pool
            </label>
          </div>
        </fieldset>
        <div className='input-group'>
          <label htmlFor='payment' className='label'>
            Payment Plan
          </label>
          <select
            id='payment'
            name='payment'
            value={data.payment}
            onChange={handleChange}
          >
            <option>Lifetime</option>
            <option>Three-year</option>
            <option>Annual</option>
            <option>Monthly</option>
          </select>
        </div>
        <div className='input-group'>
          <label htmlFor='comments' className='label'>
            Comments
          </label>
          <textarea
            rows='3'
            id='comments'
            name='comments'
            value={data.comments}
            onChange={handleChange}
            placeholder='please leave any comments here...'
          />
        </div>
        <div className='input-group'>
          <button className='form-main__btn' type='submit'>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormDoc;

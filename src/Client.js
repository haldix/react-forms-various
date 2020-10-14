import React from 'react';

const Client = ({ client, confirmDelClient, editClient }) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    dining,
    pool,
    fitness,
    payment,
    comments,
    id,
  } = client;

  return (
    <tr>
      <td>
        {firstName} {lastName}
      </td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>
        {dining && 'dining'} {pool && 'pool'} {fitness && 'fitness'}
      </td>
      <td>{payment}</td>
      <td>{comments}</td>
      <td>
        <div className='edit-btns-cont'>
          <button className='client__btn-edit' onClick={() => editClient(id)}>
            <i className='far fa-edit'></i>
          </button>
          <button
            className='client__btn-del'
            onClick={() => confirmDelClient(id)}
          >
            <i className='far fa-trash-alt'></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Client;

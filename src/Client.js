import React from 'react';

const Client = ({ client }) => {
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
          <button className='btn-del'>
            <i class='far fa-trash-alt'></i>
          </button>
          <button className='btn-edit'>
            <i class='far fa-edit'></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Client;

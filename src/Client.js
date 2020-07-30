import React, { useContext } from 'react';
import { ClientContext } from './ClientContext';
import { ModalContext } from './ModalContext';

const Client = ({ client }) => {
  const { delClient, editClient } = useContext(ClientContext);
  const { openModal } = useContext(ModalContext);

  const modalEdit = (id, modalContent) => {
    editClient(id);
    openModal(modalContent);
  };

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
          <button className='client__btn-del' onClick={() => delClient(id)}>
            <i className='far fa-trash-alt'></i>
          </button>
          <button
            className='client__btn-edit'
            onClick={() => modalEdit(id, 'two')}
          >
            <i className='far fa-edit'></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Client;

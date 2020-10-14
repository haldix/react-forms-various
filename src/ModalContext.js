import React, { createContext, useState } from 'react';
// import Form from './Form';

export const ModalContext = createContext();

// const modalContent = {
//   one: <Form />,
//   two: 'modal two content',
//   child: 'child comp modal content',
//   three: 'another sibling component modal content',
// };

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');

  const openModal = (content) => {
    setContent(content);
    setIsOpen(true);
    toggleScrollLock();
  };

  const closeModal = () => {
    setIsOpen(false);
    toggleScrollLock();
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  const onClickOutside = (e) => {
    if (e.currentTarget !== e.target) return;
    closeModal();
  };

  const toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
  };

  return (
    <ModalContext.Provider
      value={{
        content,
        isOpen,
        openModal,
        closeModal,
        onKeyDown,
        onClickOutside,
        toggleScrollLock,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

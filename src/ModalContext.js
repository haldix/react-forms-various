import React, { createContext, useState } from 'react';
import FormDoc from './FormDoc';

export const ModalContext = createContext();

const modalContent = {
  one: (
    <div>
      <p>Hello From passed modalContent from ModalProvider!</p>
      <button onClick={() => alert('random button clicked')}>
        random button
      </button>
      <p>
        Close button should auto-focus on modal open. Random button can be
        tabbed to and focused once modal is open.
      </p>
    </div>
  ),
  two: <FormDoc />,
  child: 'child comp modal content',
  three: 'another sibling component modal content',
};

const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');

  const openModal = (num) => {
    setContent(modalContent[num]);
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

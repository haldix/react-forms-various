import React, { useContext, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { ModalContext } from './ModalContext';
import './Modal.scss';
import ModalContent from './ModalContent';

const Modal = () => {
  const { isOpen, onClickOutside, onKeyDown, closeModal, content } = useContext(
    ModalContext
  );

  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (closeBtnRef.current) closeBtnRef.current.focus();
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        ReactDOM.createPortal(
          <FocusTrap>
            <aside
              className='modal-cover'
              role='dialog'
              tabIndex='-1'
              aria-modal='true'
              onClick={onClickOutside}
              onKeyDown={onKeyDown}
            >
              <div className='modal'>
                <button
                  ref={closeBtnRef}
                  className='modal-close-btn'
                  aria-label='Close Modal'
                  aria-labelledby='close-modal'
                  onClick={closeModal}
                >
                  <svg className='modal-close-icon' viewBox='0 0 40 40'>
                    <path d='M 10,10 L 30,30 M 30,10 L 10,30' />
                  </svg>
                </button>
                <ModalContent content={content} />
              </div>
            </aside>
          </FocusTrap>,
          document.body
        )}
    </>
  );
};

export default Modal;

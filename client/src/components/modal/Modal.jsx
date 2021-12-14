import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div className="overlay-container">
      <div className="fade-in">{children}</div>
    </div>,
    document.getElementById('modal-root')
  );

export default Modal;

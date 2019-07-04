import React from "react";
import "./Modal.scss";

const Modal = ({ children, closeModal }) => (
  <div className="modalBackground">
    <div className="modalWindow">
      <div onClick={() => closeModal()} className="closeModal">
        <i className="fas fa-times" />
      </div>
      <div className="modalContent">{children}</div>
    </div>
  </div>
);

export default Modal;

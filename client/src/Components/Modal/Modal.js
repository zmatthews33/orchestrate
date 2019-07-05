import React from "react";
import "./Modal.scss";
import {Link} from 'react-router-dom'

const Modal = ({ children, closeModal }) => (
  <div className="modalBackground">
    <div className="modalWindow">
      <Link to="/events/" onClick={() => closeModal()} className="closeModal">
        <i className="fas fa-times" />
      </Link>
      <div className="modalContent">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;

import React, {forwardRef, useImperativeHandle, useState} from 'react';
import './SentScan.scss';
import Modal from "react-bootstrap-modal";

const SentScanModal = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => ({

    showModal() {
      handleShow();
    }

  }));

  return (
    <Modal show={show} onHide={handleClose} className="add-modal">
      <div className="modal-cross" onClick={handleClose}>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.733 1.42188L9.15485 7L14.733 12.5781L13.3267 13.9844L7.7486 8.40625L2.17048 13.9844L0.764225 12.5781L6.34235 7L0.764225 1.42188L2.17048 0.015625L7.7486 5.59375L13.3267 0.015625L14.733 1.42188Z" fill="black"/>
        </svg>
      </div>

      <div className="add-address-content">
        <h1>Отправка скана прибора учёта от 2019.11.12 17:54</h1>

        <div className='input-and-buttons app-input wide-input'>
          <p>Документ будет отправлен на почту системному оператору</p>
          <div className='app-button-group'>
            <button className='primary-button'>Отправить</button>
            <button className='secondary-button' onClick={handleClose}>Отмена</button>
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default SentScanModal;

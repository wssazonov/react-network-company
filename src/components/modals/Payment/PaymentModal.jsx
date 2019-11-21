import React from 'react';
import Modal from "react-bootstrap-modal";
import { Link } from "react-router-dom";
import './PaymentModal.scss'

function PaymentModal ({ onClose }) {
  return (
    <Modal show={ true } onHide={ onClose } className="payment-modal">
      <div className="modal-cross" onClick={ onClose }>
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.733 1.42188L9.15485 7L14.733 12.5781L13.3267 13.9844L7.7486 8.40625L2.17048 13.9844L0.764225 12.5781L6.34235 7L0.764225 1.42188L2.17048 0.015625L7.7486 5.59375L13.3267 0.015625L14.733 1.42188Z" fill="black"/>
        </svg>
      </div>
      <div className="modalBody">
        <h1>Платёж 12 марта 2019</h1>
        <Link className="blue-text" to='/'>Посмотреть на Эзерскане</Link>
        {/* <button className='secondary-button small-button'>Посмотреть на Эзерскане</button> */}
        <div className="modalDetail">
          <span>Отправитель</span>
          <div>
            <p>Я, Дианов Иван Анатольевич</p>
            <p>0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F</p>
            <p>ivan@dianov.org</p>
            <p>2 000 ₽</p>
          </div>
        </div>
        <div className="modalDetail">
          <span>Получатели</span>
          <div className="getInfo">
            <p>Сбытовая компания</p>
            <p>0x829BD824B016326A401d083B33D092293333A831</p>
            <p>squirrel@comcast.net</p>
            <p>1 000 ₽</p>
          </div>
          <div className="getInfo">
            <p>Сетевая компания</p>
            <p>0x829BD824B016326A401d083B33D092293333A831</p>
            <p>squirrel@comcast.net</p>
            <p>1 000 ₽</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PaymentModal;

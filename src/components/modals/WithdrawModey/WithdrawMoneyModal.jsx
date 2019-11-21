import React, {forwardRef, useImperativeHandle, useState} from 'react';
import './WithdrawMoney.scss'
import Modal from "react-bootstrap-modal";

const WithdrawMoneyModal = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => ({

    showModal() {
      handleShow();
    }

  }));

  return (
    <>
      <Modal show={show} onHide={handleClose} className="withdraw-modal">
        <div className="modal-cross" onClick={handleClose}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.733 1.42188L9.15485 7L14.733 12.5781L13.3267 13.9844L7.7486 8.40625L2.17048 13.9844L0.764225 12.5781L6.34235 7L0.764225 1.42188L2.17048 0.015625L7.7486 5.59375L13.3267 0.015625L14.733 1.42188Z" fill="black"/>
          </svg>
        </div>
        <div className="withdraw-modal-content">
          <h1>Снятие денег</h1>

          <div className="input-button">
            <div className="app-input small-input">
              <input/>
              <div className="regular-text">
                На счете <span>534 &#8381;</span>
              </div>
            </div>
            <button className="primary-button">Снять</button>
          </div>
          <div className="regular-text">Мы отправим деньги по вашим реквизитам:</div>
          <div className="two-column-text">
            <div>
              <div className="regular-text">
                <label>Наименование плательщика</label>
                <div>ОАО «Сетевая компания»</div>
              </div>
              <div className="regular-text">
                <label>Расчётный счёт</label>
                <div>40702810500000000072</div>
              </div>
              <div className="regular-text">
                <label>Наименование банка</label>
                <div>ООО Банк «Аверс»</div>
              </div>
              <div className="regular-text">
                <label>БИК</label>
                <div>049205774</div>
              </div>
            </div>

            <div>
              <div className="regular-text">
                <label>Корреспондентский счет</label>
                <div>30101810500000000774</div>
              </div>
              <div className="regular-text">
                <label>ИНН</label>
                <div>1653003601</div>
              </div>
              <div className="regular-text">
                <label>КПП</label>
                <div>165501001</div>
              </div>
            </div>
          </div>
          <button className="secondary-button small-button">Изменить мои реквизиты</button>
          <div className="regular-text">Подготовка к отправке денег займёт несколько часов. Перевод денег между разными банками может занять несколько дней.</div>
        </div>
      </Modal>
    </>
  );
});

export default WithdrawMoneyModal;

import React, {forwardRef, useImperativeHandle, useState} from 'react';
import './ReplenishModal.scss';
import Modal from "react-bootstrap-modal";

const ReplenishModal = forwardRef((props, ref) => {
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
      <Modal show={show} onHide={handleClose} className="replenish-modal">
        <div className="modal-cross" onClick={handleClose}>
          <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.733 1.42188L9.15485 7L14.733 12.5781L13.3267 13.9844L7.7486 8.40625L2.17048 13.9844L0.764225 12.5781L6.34235 7L0.764225 1.42188L2.17048 0.015625L7.7486 5.59375L13.3267 0.015625L14.733 1.42188Z" fill="black"/>
          </svg>
        </div>
        <div className="replenish-modal-content">
          <h1>Пополнение баланса</h1>
          <div className="regular-text">Чтобы пополнить баланс, переведите деньги на указанный счёт.<br/> <b>Деньги пропадут,</b> если отправить их не со своего счёта. Проверьте правильность своих реквизитов перед отправкой:</div>
          <div className="two-column-block">
            <div>
              <h1>Со счёта</h1>
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
            </div>
            <div>
              <h1>На счёт</h1>
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
            </div>
          </div>
          <div className="regular-text">Перевод денег может занять несколько дней. Ваш баланс пополнится через несколько часов после завершения перевода. Ваш банк может взимать коммиссию за перевод.<br/><br/>
            При пополнении счёта лимит автоматически поднимается на внесённую сумму. Вы можете уменьшить лимит вручную.</div>
        </div>
      </Modal>
    </>
  );
});

export default ReplenishModal;

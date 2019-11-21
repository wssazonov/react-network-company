import React from 'react';
import './TransactionsInfo.scss';

function TransactionsInfo() {
  return (
    <div className="transactions-info-container">
      <div className="column">
        <p className="regular-text">В начале периода</p>
        <h2>123 310 ₽</h2>
      </div>
      <div className="column"> 
        <p className="regular-text">В конце периода</p>
        <h2>123 310 ₽</h2>
      </div>
      <div className="column green">
        <p className="regular-text">Сумма пополнений</p>
        <h2>123 310 ₽</h2>
      </div>
      <div className="column red">
        <p className="regular-text">Сумма списаний</p>
        <h2>123 310 ₽</h2>
      </div>
    </div>
  );
}

export default TransactionsInfo;

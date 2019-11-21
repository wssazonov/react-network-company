import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable/TransactionsTable';
import TransactionsTableClient from './TransactionsTableClient/TransactionsTableClient';
import { Dropdown } from 'semantic-ui-react';
import './TransactionsPage.scss';
import PaymentModal from "../modals/Payment/PaymentModal";
import TransactionsInfo from './TransactionsInfo/TransactionsInfo';
import { connect } from 'react-redux';

const mockTransactions = [
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполняется...' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
  { date: new Date().toISOString(), sender: 'Житкова Любава Евстигнеевна', reciever: 'Сбытовая компания, Сетевая бла бла бла бла', amount: 4000, status: 'Выполнена' },
];

const mockClientTransactions = [
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: null, status: 'Выполняется...' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: null, status: 'Выполняется...' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: null, credit: 1000, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнена' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: null, status: 'Выполняется...' },
  { date: new Date().toISOString(), contragent: 'Никаев Филимон Евлампиевич', debit: 10000, credit: null, balance: 123123, status: 'Выполнена' },
];

const dateFilterOptions = [
  {
    key: '1 января 2019 - 1 сентября 2019',
    text: '1 января 2019 - 1 сентября 2019',
    value: '1 января 2019 - 1 сентября 2019',
  },
  {
    key: '1 сентября 2019 - 1 октября 2019',
    text: '1 сентября 2019 - 1 октября 2019',
    value: '1 сентября 2019 - 1 октября 2019',
  },
];
  
function TransactionsPage({ userRole }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = event => {
    setShowPaymentModal(true);
    setSelectedRow(event.target.id);
  };

  const handleShowAll = event => console.log('Clicked show all');

  const handlePaymentModalClose = () => {
    setShowPaymentModal(false);
    setSelectedRow(-1);
  };

  return (
    <div className="page-content">
      <h1>Транзакции</h1>
      <div className='flex-row'>
        <Dropdown
          defaultValue='1 января 2019 - 1 сентября 2019'
          fluid
          className="app-dropdown-button date-range-selector"
          selection
          icon='angle down'
          options={ dateFilterOptions }
        />
        <button className="secondary-button borderless show-all-button" onClick={ handleShowAll }>Показать за всё время</button>
      </div>

      { 
        userRole === 'Клиент'
          ? <>
              <TransactionsInfo /> 
              <TransactionsTableClient transactions={ mockClientTransactions } onRowClick={ handleRowClick } selectedRow={ selectedRow }/>
            </>
          : <TransactionsTable transactions={ mockTransactions } onRowClick={ handleRowClick } selectedRow={ selectedRow } />
      }

      { showPaymentModal && <PaymentModal onClose={ handlePaymentModalClose } /> }
    </div>
  );
}

const mapStateToProps = state => ({
  userRole: state.user.role,
});

export default connect(mapStateToProps, null)(TransactionsPage);

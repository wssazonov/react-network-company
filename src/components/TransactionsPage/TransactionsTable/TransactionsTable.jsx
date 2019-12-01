import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';

function TransactionsTable({ transactions, onRowClick, selectedRow }) {
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Отправитель' },
    { title: 'Получатель', styles: { style: { maxWidth: '245px' }, condition: () => true } },
    { title: 'Сумма ₽' },
    { title: 'Статус', styles: { 
      style: { color: '#8AB65A', opacity: 0.4 },
      style: { color: '#8AB65A' }, condition: value => value === 'Выполнена' 
    } 
    }
    
  ];

  return (
    <Table 
      columns={ columns } 
      data={ transactions } 
      onRowClick={ onRowClick }
      selectedRow={ selectedRow }
      clickableCondition={ item => item.status === 'Выполнена' }
    />
  );
}

export default TransactionsTable;
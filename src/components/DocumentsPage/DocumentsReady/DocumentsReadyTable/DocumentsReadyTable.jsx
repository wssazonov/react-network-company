import React from 'react';
import Table from '../../../Table/Table';
import { formatDate } from '../../../../utils';

function DocumentsReadyTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Объект' },
    { title: 'Документ' },
    { title: 'Статус', styles: { style: { color: '#8AB65A' }, condition: value => value === 'Отправлен'}}
  ];

  const actions = [
    <button className={ 'secondary-button hidden' } onClick={ onDelete }>Отправить на почту СО</button>
  ];

  return (
    <Table 
      columns={ columns } 
      data={ objects } 
      onDelete= { onDelete }
      actions={ actions } 
      onRowClick={ onRowClick }
    />
  );
}

export default DocumentsReadyTable;
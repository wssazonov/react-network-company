import React from 'react';
import Table from '../../../Table/Table';
import { formatDate } from '../../../../utils';

function DocumentsInfoTable({ events, onRowClick, onDelete }) {
  const columns = [
    { title: 'Дата и время', format: date => formatDate(date) },
    { title: 'Объект' },
    { title: 'Число участников' },
    { title: 'Статус', styles: { style: { color: '#000000;' }, condition: value => value === 'Выполняется'}}
  ];

  return (
    <Table 
      columns={ columns } 
      data={ events } 
      onDelete= { onDelete }
      onRowClick={ onRowClick }
    />
  );
}

export default DocumentsInfoTable;
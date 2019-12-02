import React from 'react';
import Table from '../../Table/Table';

function ReadyTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Объект' },
    { title: 'Готовность' }
  ];

  return (
    <Table 
      columns={ columns } 
      data={ objects } 
      onDelete= { onDelete }
      onRowClick={ onRowClick }
    />
  );
}

export default ReadyTable;
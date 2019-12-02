import React from 'react';
import Table from '../../Table/Table';

function ReadyTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Объект', accessor: value => value.object },
    { title: 'Готовность', 
      subColumns: [
        { title:'Текущая',  accessor: value => value.status, format: value => value ? value : '—', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, condition: value => value === null } }, 
        { title:'За период', accessor: value => value.consumption, format: value => value ? value : '—', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, condition: value => value === null } }, 
      ]  
    }
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
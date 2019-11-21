import React from 'react';
import Table from '../../Table/Table';

function PermissionsTable({ permissions, onRowClick, onDelete }) {
  const columns = [
    { 
      title: 'Пользователь', 
      subColumns: [
        { title:'Имя', accessor: value => value.name }, 
        { title:'Почта', accessor: value => value.mail }, 
        { title:'Адрес', accessor: value => value.address, format: address => `${ address.substring(0,7) }...${ address.slice(address.length - 5) }` }
      ] 
    },
    { title: 'Лимит ₽', format: value => value.toLocaleString() }
  ];
  const actions = [
    <button className='secondary-button hidden' onClick={ onDelete }>Удалить</button>
  ];

  return (
    <Table
      columns={ columns }
      data={ permissions }
      actions={ actions }
      onRowClick={ onRowClick }
    />
  );
}

export default PermissionsTable;
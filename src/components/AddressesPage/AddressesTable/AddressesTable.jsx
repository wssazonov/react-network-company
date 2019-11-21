import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';


function AddressesTable({ addresses, onDelete }) {
  const columns = [
    { title: 'Адрес', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, itemCondition: item => item.addedAt === null } },
    { title: 'Дата добавления', format: date => date ? formatDate(date) : 'Добавляется...', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, condition: value => value === null } },
    { 
      title: 'Привязанный пользователь', 
      subColumns: [
        { title:'Имя', accessor: value => value.name , format: value => value ? value : '—', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, condition: value => value === null } }, 
        { title:'Почта', accessor: value => value.mail, format: value => value ? value : '—', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, condition: value => value === null } }, 
        { title:'Роль', accessor: value => value.role, format: value => value ? value : '—', styles: { style: { color: 'rgba(0, 0, 0, 0.4)' }, condition: value => value === null } }
      ] 
    },
  ];

  const actions = [
    <button className={ 'secondary-button hidden' } onClick={ onDelete }>Удалить</button>
  ];

  return (
    <Table 
      columns={ columns } 
      data={ addresses } 
      actions={ actions } 
    />
  );
}

export default AddressesTable;
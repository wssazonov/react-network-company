import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';

function ObjectsTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Объект' },
    { title: 'Код ГТП'},
    { title: 'Субъект РФ' },
    { title: 'Ценовая зона' },
    { title: 'Гарантирующий поставщик'},
  ];

  const actions = [
    <button className='secondary-button hidden' onClick={ onDelete }>Удалить</button>
  ];

  return (
    <Table 
      columns={ columns } 
      data={ objects } 
      onRowClick={ onRowClick } 
      actions={ actions } 
    />
  );
}

export default ObjectsTable;

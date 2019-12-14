import React from 'react';
import Table from '../../../Table/Table';

function StatisticObjectTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Потребитель' },
    { title: 'Потребление, МВт·ч' },
    { title: 'Готовность' },
    { title: 'Выполнение' }
  ];

  const actions = [
    <button className={ 'secondary-button hidden' } onClick={ onDelete }>Открыть профиль потребителя</button>
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

export default StatisticObjectTable;
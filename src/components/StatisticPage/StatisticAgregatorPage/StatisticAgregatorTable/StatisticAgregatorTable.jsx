import React from 'react';
import Table from '../../../Table/Table';

function StatisticAgregatorTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Объект' },
    { title: 'Потребление, МВт·ч' },
    { title: 'Готовность' },
    { title: 'Выполнение' }
  ];

  const actions = [
    <button className={ 'secondary-button hidden' } onClick={ onDelete }>Открыть профиль объекта</button>
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

export default StatisticAgregatorTable;
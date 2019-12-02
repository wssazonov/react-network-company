import React from 'react';
import Table from '../../../Table/Table';

function StatisticUserTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Прибор учёта' },
    { title: 'Заводской номер' },
    { title: 'Место расположения' },
    { title: 'Код точки измерения' },
    { title: 'Потребление' }
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

export default StatisticUserTable;
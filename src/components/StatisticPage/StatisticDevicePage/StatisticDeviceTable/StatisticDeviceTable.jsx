import React from 'react';
import Table from '../../../Table/Table';

function StatisticDeviceTable({ objects, onRowClick, onDelete }) {
  const columns = [
    { title: 'Период' },
    { title: 'Потребление, кВт·ч' }
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

export default StatisticDeviceTable;
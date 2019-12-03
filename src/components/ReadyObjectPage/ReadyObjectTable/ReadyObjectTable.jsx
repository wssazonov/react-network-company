import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';
import RoleBasedRender from '../../RoleBasedRender/RoleBasedRender';

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

  const columns2 = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Готовность', styles: { 
        style: { color: '#000000', opacity: 0.4 },
        style: { color: '#8AB65A' }, condition: value => value === 'Готов' 
      }  
    }
  ];

  return (
    <div>
      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <Table 
          columns={ columns } 
          data={ objects } 
          onDelete= { onDelete }
          onRowClick={ onRowClick }
        />
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Потребитель'] } >
        <Table 
          columns={ columns2 } 
          data={ objects } 
          onDelete= { onDelete }
          onRowClick={ onRowClick }
        />
      </RoleBasedRender>
    </div>
  );
}

export default ReadyTable;
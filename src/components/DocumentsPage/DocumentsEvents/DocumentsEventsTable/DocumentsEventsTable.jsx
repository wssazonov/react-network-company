import React, {useRef} from 'react';
import Table from '../../../Table/Table';
import { formatDate } from '../../../../utils';
import RoleBasedRender from '../../../RoleBasedRender/RoleBasedRender';

function DocumentsEventsTable({ documents, onRowClick, onDelete }) {
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Объект' },
    { title: 'Файл' }
  ];

  return (
    <div>
      {/* <RoleBasedRender requiredRoles={ ['Администратор'] } > */}
        <Table 
          columns={ columns } 
          data={ documents } 
          onDelete= { onDelete }
          onRowClick={ onRowClick }
        />
      {/* </RoleBasedRender> */}
    </div>
  );
}

export default DocumentsEventsTable;
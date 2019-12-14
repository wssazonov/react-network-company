import React, {useRef} from 'react';
import Table from '../../../Table/Table';
import { formatDate } from '../../../../utils';
import SentScanModal from "../../../modals/SentScan/SentScanModal";
import RoleBasedRender from '../../../RoleBasedRender/RoleBasedRender';

function DocumentsConsumptionTable({ documents, onRowClick, onDelete }) {
  const childRef = useRef();
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Объект' },
    { title: 'Потребитель' },
    { title: 'Документ' },
    { title: 'Статус', styles: { style: { color: '#8AB65A' }, condition: value => value === 'Отправлен'}}
  ];

  const columns2 = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Документ' },
    { title: 'Статус', styles: { style: { color: '#8AB65A' }, condition: value => value === 'Отправлен'}}
  ];

  const actions = [
    <RoleBasedRender requiredRoles={ ['Администратор'] } >
      <button className={ 'secondary-button hidden' } onClick={() => childRef.current.showModal()}>Отправить на почту СО</button>
    </RoleBasedRender>
  ];

  return (
    <div>
      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <Table 
          columns={ columns } 
          data={ documents } 
          onDelete= { onDelete }
          actions={ actions } 
          onRowClick={ onRowClick }
        />
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Потребитель'] } >
        <Table 
          columns={ columns2 } 
          data={ documents } 
          onDelete= { onDelete }
          actions={ actions } 
          onRowClick={ onRowClick }
        />
      </RoleBasedRender>
      <SentScanModal ref={childRef}/>
    </div>
  );
}

export default DocumentsConsumptionTable;
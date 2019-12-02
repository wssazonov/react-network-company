import React, {useRef} from 'react';
import Table from '../../../Table/Table';
import { formatDate } from '../../../../utils';
import SentScanModal from "../../../modals/SentScan/SentScanModal";

function DocumentsReadyTable({ objects, onRowClick, onDelete }) {
  const childRef = useRef();
  const columns = [
    { title: 'Дата', format: date => formatDate(date) },
    { title: 'Объект' },
    { title: 'Документ' },
    { title: 'Статус', styles: { style: { color: '#8AB65A' }, condition: value => value === 'Отправлен'}}
  ];

  const actions = [
    <button className={ 'secondary-button hidden' } onClick={() => childRef.current.showModal()}>Отправить на почту СО</button>
  ];

  return (
    <div>
      <Table 
        columns={ columns } 
        data={ objects } 
        onDelete= { onDelete }
        actions={ actions } 
        onRowClick={ onRowClick }
      />
      <SentScanModal ref={childRef}/>
    </div>
  );
}

export default DocumentsReadyTable;
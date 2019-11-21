import React from 'react';
import Table from '../../Table/Table';
import { formatDate } from '../../../utils';
import unFoldIcon from '../../../assets/unfold-icon.svg';
import './JournalTable.scss';


function JournalTable({ events, onUnfold }) {
  const columns = [
    { title: 'Время', format: date => formatDate(date) },
    { title: 'Событие', format: value => JSON.stringify(value) },
  ];

  const actions = [
    <button  className='btn-styleless' onClick={ onUnfold } >
      <img src={ unFoldIcon } alt='' />
    </button>
  ];

  return (
    <Table 
      columns={ columns } 
      data={ events } 
      actions={ actions }
      itemsPerPage={ 5 }
    />
  );
}

export default JournalTable;
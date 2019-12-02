import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import DocumentsInfoTable from './DocumentsInfoTable/DocumentsInfoTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Житкова Любава Евстигнеевна', document: 'Скан прибора учета', status: 'Не отправлен' },
];

const dateFilterOptions = [
  {
    key: '1 января 2019 - 1 сентября 2019',
    text: '1 января 2019 - 1 сентября 2019',
    value: '1 января 2019 - 1 сентября 2019',
  },
  {
    key: '1 сентября 2019 - 1 октября 2019',
    text: '1 сентября 2019 - 1 октября 2019',
    value: '1 сентября 2019 - 1 октября 2019',
  },
];

const usersOptions = [
  {
    key: 'Все потребители',
    text: 'Все потребители',
    value: 'Все потребители',
  }
];

const statusOptions = [
  {
    key: 'С любым статусом',
    text: 'С любым статусом',
    value: 'С любым статусом',
  },
  {
    key: 'Отправлен',
    text: 'Отправлен',
    value: 'Отправлен',
  },
  {
    key: 'Не отправлен',
    text: 'Не отправлен',
    value: 'Не отправлен',
  },
];

function DocumentsInfo() {
  const handleDelete = event => console.log('Clicked delete');
  const handleRowClick = event => console.log('Clicked');

  return (
    <div>
      <div className='flex-row'>
        <Dropdown
          defaultValue='Все потребители'
          fluid
          className="app-dropdown-button date-range-selector small-input dropdown-margin"
          selection
          icon='angle down'
          options={ usersOptions }
        />
        <Dropdown
          defaultValue='1 января 2019 - 1 сентября 2019'
          fluid
          className="app-dropdown-button date-range-selector dropdown-margin"
          selection
          icon='angle down'
          options={ dateFilterOptions }
        />
        <Dropdown
          defaultValue='С любым статусом'
          fluid
          className="app-dropdown-button date-range-selector small-input-dropdown dropdown-margin"
          selection
          icon='angle down'
          options={ statusOptions }
        />
      </div>
      <DocumentsInfoTable 
        documents={ mockInfo } 
        onDelete={ handleDelete } 
        onRowClick={ handleRowClick } 
      />
    </div>
  );
}

export default DocumentsInfo;

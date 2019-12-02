import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import DocumentsReadyTable from './DocumentsReadyTable/DocumentsReadyTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), user: 'Объект №1', document: 'Макет Availability', status: 'Не отправлен' },
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

const objectsOptions = [
  {
    key: 'Все объекты',
    text: 'Все объекты',
    value: 'Все объекты',
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

function DocumentsReady() {
  const handleDelete = event => console.log('Clicked delete');
  const handleRowClick = event => console.log('Clicked');

  return (
    <div>
      <div className='flex-row'>
        <Dropdown
          defaultValue='Все объекты'
          fluid
          className="app-dropdown-button date-range-selector small-input dropdown-margin"
          selection
          icon='angle down'
          options={ objectsOptions }
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
      <DocumentsReadyTable 
        objects={ mockInfo } 
        onDelete={ handleDelete } 
        onRowClick={ handleRowClick } 
        />
    </div>
  );
}

export default DocumentsReady;
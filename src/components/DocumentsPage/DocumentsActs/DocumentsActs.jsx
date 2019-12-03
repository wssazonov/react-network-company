import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import DocumentsActsTable from './DocumentsActsTable/DocumentsActsTable';

import UploadScantModal from "../../modals/UploadScan/UploadScanModal";
import RoleBasedRender from '../../RoleBasedRender/RoleBasedRender';

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

const mockInfo2 = [
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Скан прибора учета', status: 'Не отправлен' },
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
    key: 'С потребителями и СО',
    text: 'С потребителями и СО',
    value: 'С потребителями и СО',
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

function DocumentsActs() {
  const childRef = useRef();
  const handleDelete = event => console.log('Clicked delete');
  const handleRowClick = event => console.log('Clicked');

  return (
    <div>
      <div className='flex-row space'>
        <div className='flex-row'>
          <RoleBasedRender requiredRoles={ ['Администратор'] } >
            <Dropdown
              defaultValue='С потребителями и СО'
              fluid
              className="app-dropdown-button date-range-selector medium-input-dropdown dropdown-margin"
              selection
              icon='angle down'
              options={ usersOptions }
            />
          </RoleBasedRender>
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
        <RoleBasedRender requiredRoles={ ['Администратор'] } >
          <button className='primary-button flex-row' onClick={() => childRef.current.showModal()}>Загрузить скан акта</button>
        </RoleBasedRender>
      </div>
      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <DocumentsActsTable 
          documents={ mockInfo } 
          onDelete={ handleDelete } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Потребитель'] } >
        <DocumentsActsTable 
          documents={ mockInfo2 } 
          onDelete={ handleDelete } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
      <UploadScantModal ref={childRef}/>
    </div>
  );
}

export default DocumentsActs;

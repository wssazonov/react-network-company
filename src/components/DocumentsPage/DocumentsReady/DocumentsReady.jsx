import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import DocumentsReadyTable from './DocumentsReadyTable/DocumentsReadyTable';
import UploadMaketModal from "../../modals/UploadMaket/UploadMaketModal";
import RoleBasedRender from '../../RoleBasedRender/RoleBasedRender';
import DateTimePicker from '../../DateTimePicker/DateTimePicker';

const mockInfo = [
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), object: 'Объект 1', document: 'Макет Availability', status: 'Не отправлен' },
];

const mockInfo2 = [
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Не отправлен' },
  { date: new Date().toISOString(), document: 'Макет Availability', status: 'Не отправлен' },
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
  const childRef = useRef();
  const handleDelete = event => console.log('Clicked delete');
  const handleRowClick = event => console.log('Clicked');

  return (
    <div>
      <div className='flex-row space'>
        <div className='flex-row'>
          <DateTimePicker />
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
          <button className='primary-button flex-row' onClick={() => childRef.current.showModal()}>Загрузить макет Availability</button>
        </RoleBasedRender>
      </div>
      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <DocumentsReadyTable 
          objects={ mockInfo } 
          onDelete={ handleDelete } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Потребитель'] } >
        <DocumentsReadyTable 
          objects={ mockInfo2 } 
          onDelete={ handleDelete } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
      <UploadMaketModal ref={childRef}/>
    </div>
  );
}

export default DocumentsReady;

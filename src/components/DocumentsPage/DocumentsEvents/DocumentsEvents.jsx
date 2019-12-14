import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import DocumentsEventsTable from './DocumentsEventsTable/DocumentsEventsTable';
import RoleBasedRender from '../../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.13-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.12-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.11-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.10-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.09-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.08-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.07-dr-event.xml' },
  { date: new Date().toISOString(), user: 'Объект 1', document: '2019.11.06-dr-event.xml' },
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
    key: 'Все объекты',
    text: 'Все объекты',
    value: 'Все объекты',
  }
];

function DocumentsEvents() {
  const handleDelete = event => console.log('Clicked delete');
  const handleRowClick = event => console.log('Clicked');

  return (
    <div>
      <div className='flex-row space'>
        <div className='flex-row'>
          <RoleBasedRender requiredRoles={ ['Администратор'] } >
            <Dropdown
              defaultValue='Все объекты'
              fluid
              className="app-dropdown-button date-range-selector small-input dropdown-margin"
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
        </div>
      </div>

      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <DocumentsEventsTable 
          documents={ mockInfo } 
          onDelete={ handleDelete } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
    </div>
  );
}

export default DocumentsEvents;

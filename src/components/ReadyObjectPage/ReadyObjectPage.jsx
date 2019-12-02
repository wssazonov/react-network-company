import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './ReadyObjectPage.scss';
import ReadyObjectTable from './ReadyObjectTable/ReadyObjectTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { object: 'Потребитель 1', status: 'Готов', consumption: '10%' },
  { object: 'Потребитель 2', status: 'Не готов', consumption: '20%' },
  { object: 'Потребитель 3', status: 'Готов', consumption: '30%' },
  { object: 'Потребитель 4', status: 'Не готов', consumption: '40%' },
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

function ReadyPage({ history, match }) {
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleSubmit = event => console.log('Clicked Download');
  const resetChanges = event => console.log('Clicked Cancel');

  return (
    <div className="page-content addresses-page">
      <div className="statisticHeader">
        <h1>Готовность <span>Объект 1</span></h1>
      </div>
      <div className='flex-row'>
        <Dropdown
          defaultValue='1 января 2019 - 1 сентября 2019'
          fluid
          className="app-dropdown-button date-range-selector dropdown-margin"
          selection
          icon='angle down'
          options={ dateFilterOptions }
        />
      </div>
      <ReadyObjectTable 
        objects={ mockInfo } 
        onRowClick={ handleRowClick } 
      />

      <div className='app-button-group statistic-buttons'>
        <button className='primary-button' onClick={ handleSubmit }>Скачать макет Availability</button>
        <p>После скачивания вы сможете их подписать, <br /> а потом загрузить <span> в раздел Документы → Готовность</span></p>
      </div>
    </div>
  );
}

export default ReadyPage;

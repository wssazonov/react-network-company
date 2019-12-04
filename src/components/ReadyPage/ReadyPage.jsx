import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './ReadyPage.scss';
import ReadyTable from './ReadyTable/ReadyTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { object: 'Объект 1', consumption: '10%' },
  { object: 'Объект 2', consumption: '20%' },
  { object: 'Объект 3', consumption: '30%' },
  { object: 'Объект 4', consumption: '40%' },
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
    <div className="addresses-page">
      <div className="statisticHeader">
        <h1>Готовность <span>Агрегатор</span></h1>
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
      <ReadyTable 
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

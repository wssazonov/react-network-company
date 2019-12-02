import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './StatisticAgregatorPage.scss';
import StatisticAgregatorTable from './StatisticAgregatorTable/StatisticAgregatorTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { object: 'Объект 1', readiness: 50, consumption: '10%', rendering: '23%' },
  { object: 'Объект 2', readiness: 40, consumption: '20%', rendering: '33%' },
  { object: 'Объект 3', readiness: 30, consumption: '30%', rendering: '43%' },
  { object: 'Объект 4', readiness: 20, consumption: '40%', rendering: '53%' },
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

function StatisticAgregatorPage({ history, match }) {
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleSubmit = event => console.log('Clicked Download');
  const resetChanges = event => console.log('Clicked Cancel');

  return (
    <div>
      <div className="statisticHeader">
        <h1>Статистика <span>Агрегатор</span></h1>
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
      <StatisticAgregatorTable 
        objects={ mockInfo } 
        onRowClick={ handleRowClick } 
      />

      <div className='app-button-group statistic-buttons'>
        <button className='primary-button' onClick={ handleSubmit }>Скачать макеты 80020</button>
        <p>После скачивания вы сможете их подписать, <br /> а потом загрузить <span> в раздел Документы</span></p>
      </div>
      <button className='secondary-button' onClick={ resetChanges }>Скачать отчёт о ПУ с нулевыми показателями</button>
    </div>
  );
}

export default StatisticAgregatorPage;

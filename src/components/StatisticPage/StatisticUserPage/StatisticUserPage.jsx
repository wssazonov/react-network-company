import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './StatisticUserPage.scss';
import StatisticUserTable from './StatisticUserTable/StatisticUserTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { device: 'Прибор учета 1', deviceNumber: 340000102, address: 'Мясницкая 19, 3 эт.', pointCode: 340000102, readiness: 40, method: 'Прием' },
  { device: 'Прибор учета 2', deviceNumber: 340000102, address: 'Мясницкая 19, 3 эт.', pointCode: 340000102, readiness: 40, method: 'Отдача' },
  { device: 'Прибор учета 3', deviceNumber: 340000102, address: 'Мясницкая 19, 3 эт.', pointCode: 340000102, readiness: 40, method: 'Прием' },
  { device: 'Прибор учета 4', deviceNumber: 340000102, address: 'Мясницкая 19, 3 эт.', pointCode: 340000102, readiness: 40, method: 'Отдача' },
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

function StatisticUserPage({ history, match }) {
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleSubmit = event => console.log('Clicked Download');
  const resetChanges = event => console.log('Clicked Cancel');

  return (
    <div>
      <div className="statisticHeader">
        <h1>Статистика <span>Потребитель 1</span></h1>
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
      <div className='flex-row'>
        <div>
          <div className="regular-text">Полное потребление</div>
          <div className="balance-value">64,02 МВт·ч</div>
        </div>
        <div className="method-calc">
          <div className="regular-text">Способ рассчёта</div>
          <div className="method">Базовая линия</div>
        </div>
      </div>
      
      <StatisticUserTable 
        objects={ mockInfo } 
        onRowClick={ handleRowClick } 
      />

      <div className='app-button-group statistic-buttons'>
        <button className='primary-button' onClick={ handleSubmit }>Скачать макеты 80020</button>
        <p>После скачивания вы сможете их подписать, <br /> а потом загрузить <span> в раздел Документы</span></p>
        <button className='primary-button flex-row'>Загрузить данные из файла</button>
      </div>
    </div>
  );
}

export default StatisticUserPage;

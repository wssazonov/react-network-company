import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './StatisticDevicePage.scss';
import StatisticDeviceTable from './StatisticDeviceTable/StatisticDeviceTable';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { object: '06.10.2019 14:30 — 15:00', readiness: 50 },
  { object: '06.10.2019 14:30 — 15:00', readiness: 40 },
  { object: '06.10.2019 14:30 — 15:00', readiness: 30 },
  { object: '06.10.2019 14:30 — 15:00', readiness: 20 },
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

function StatisticDevicePage({ history, match }) {
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleSubmit = event => console.log('Clicked Download');
  const resetChanges = event => console.log('Clicked Cancel');

  return (
    <div>
      <div className="statisticHeader">
        <h1>Статистика <span>Прибор учёта 1</span></h1>
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
      <div className="regular-text">Поотребление</div>
      <div className="balance-value">500000 кВт·ч</div>
      <StatisticDeviceTable 
        objects={ mockInfo } 
        onRowClick={ handleRowClick } 
      />

      </div>
  );
}

export default StatisticDevicePage;

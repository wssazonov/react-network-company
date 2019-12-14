import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './ReadyObjectPage.scss';
import ReadyObjectTable from './ReadyObjectTable/ReadyObjectTable';
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import SentReadyModal from "../modals/SentReady/SentReadyModal";
import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Статистика',
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
]

const mockInfo = [
  { object: 'Потребитель 1', ready: {status: 'Готов', consumption: '10%' } },
  { object: 'Потребитель 2', ready: {status: 'Не готов', consumption: '20%' } },
  { object: 'Потребитель 3', ready: {status: 'Готов', consumption: '30%' } },
  { object: 'Потребитель 4', ready: {status: 'Не готов', consumption: '40%' } },
];

const mockInfo2 = [
  { date: new Date().toISOString(), ready: 'Готов' },
  { date: new Date().toISOString(), ready: 'Не готов' },
  { date: new Date().toISOString(), ready: 'Готов' },
  { date: new Date().toISOString(), ready: 'Не готов' },
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
  const childRef = useRef();
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleSubmit = event => console.log('Clicked Download');
  const resetChanges = event => console.log('Clicked Cancel');

  return (
    <div className="page-content addresses-page ready-page">
      <div className="statisticHeader">
        <h1>Готовность <span>Объект 1</span></h1>
      </div>
      <RoleBasedRender requiredRoles={ ['Потребитель'] } className="status-object">
        <div className="regular-text">Статус на 24 ноября</div>
        <div className='flex-row'>
          <div className="balance-value">Готов</div>
          <button className='primary-button' onClick={() => childRef.current.showModal()}>Изменить статус готовности</button>
        </div>
        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
      </RoleBasedRender>
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
      <RoleBasedRender requiredRoles={ ['Потребитель'] } >
        <div className="regular-text">Готовность за период</div>
        <div className="balance-value">50%</div>
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <ReadyObjectTable 
          objects={ mockInfo } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Потребитель'] } >
        <ReadyObjectTable 
          objects={ mockInfo2 } 
          onRowClick={ handleRowClick } 
        />
      </RoleBasedRender>
      <RoleBasedRender requiredRoles={ ['Администратор'] } >
        <div className='app-button-group statistic-buttons'>
          <button className='primary-button' onClick={ handleSubmit }>Скачать макет Availability</button>
          <p>После скачивания вы сможете их подписать, <br /> а потом загрузить <span> в раздел Документы → Готовность</span></p>
        </div>
        <button className='primary-button' onClick={ handleSubmit }>Скачать макет за период</button>
      </RoleBasedRender>
      <SentReadyModal ref={childRef}/>
    </div>
  );
}

export default ReadyPage;

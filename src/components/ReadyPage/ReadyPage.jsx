import React, {useRef} from 'react';
import { Dropdown } from 'semantic-ui-react';
import './ReadyPage.scss';
import ReadyTable from './ReadyTable/ReadyTable';
import DateTimePicker from '../DateTimePicker/DateTimePicker';
// import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockInfo = [
  { object: 'Объект 1', consumption: '10%' },
  { object: 'Объект 2', consumption: '20%' },
  { object: 'Объект 3', consumption: '30%' },
  { object: 'Объект 4', consumption: '40%' },
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
        <DateTimePicker />
      </div>
      <ReadyTable 
        objects={ mockInfo } 
        onRowClick={ handleRowClick } 
      />

      <div className='app-button-group statistic-buttons'>
        <button className='primary-button' onClick={ handleSubmit }>Скачать макет Availability</button>
        <p>После скачивания вы сможете их подписать, <br /> а потом загрузить <span> в раздел Документы → Готовность</span></p>
      </div>
      <button className='primary-button' onClick={ handleSubmit }>Скачать макет за период</button>
    </div>
  );
}

export default ReadyPage;

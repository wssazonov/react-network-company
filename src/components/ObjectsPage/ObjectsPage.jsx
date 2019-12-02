import React from 'react';
import ObjectsTable from './ObjectsTable/ObjectsTable';
import './ObjectPage.scss'
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockObjects = [
  { object: 'Никаев Фимилион Евлампиевич', gtp: 'jdshgkjsdhg039g23u0g9u209gu23', subject: 'example@mail.com', priceZone: 'Администратор', guaranteeingSupplier: 'РосКабель' },
  { object: 'Никаев Фимилион Евлампиевич', gtp: 'jdshgkjsdhg039g23u0g9u209gu23', subject: 'example@mail.com', priceZone: 'Администратор', guaranteeingSupplier: 'РосКабель' },
  { object: 'Никаев Фимилион Евлампиевич', gtp: 'jdshgkjsdhg039g23u0g9u209gu23', subject: 'example@mail.com', priceZone: 'Администратор', guaranteeingSupplier: 'РосКабель' },
  { object: 'Никаев Фимилион Евлампиевич', gtp: 'jdshgkjsdhg039g23u0g9u209gu23', subject: 'example@mail.com', priceZone: 'Администратор', guaranteeingSupplier: 'РосКабель' },
  { object: 'Никаев Фимилион Евлампиевич', gtp: 'jdshgkjsdhg039g23u0g9u209gu23', subject: 'example@mail.com', priceZone: 'Администратор', guaranteeingSupplier: 'РосКабель' },
  { object: 'Никаев Фимилион Евлампиевич', gtp: 'jdshgkjsdhg039g23u0g9u209gu23', subject: 'example@mail.com', priceZone: 'Администратор', guaranteeingSupplier: 'РосКабель' },
];

function ObjectsPage({ history, match }) {
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleDelete = event => console.log('Clicked delete');

  return (
    <div className="page-content">
      <div className="header-block">
        <h1>Объекты</h1>
        <button className='secondary-button hidden'>добавить</button>
      </div>
      <ObjectsTable 
        objects={ mockObjects } 
        onRowClick={ handleRowClick } 
        onDelete={ handleDelete }
      />
    </div>
  );
}

export default ObjectsPage;

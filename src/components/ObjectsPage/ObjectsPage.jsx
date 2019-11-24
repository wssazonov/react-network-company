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
  // in future it is supposed to redirect to /users/:userId, where userId is the id of the user you clicked on
  // then you could get userId by props.match.params.userId in the component for route /users/:userId (check src/routes.js)
  // and make api call to fetch userData, or alternatively get it from redux store, if you stored all users there
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleDelete = event => console.log('Clicked delete');

  return (
    <div className="page-content">
      <div className="header-block">
        <h1>Объекты</h1>
        <button className='secondary-button hidden'>добавить</button>
      </div>
      {/* <RoleBasedRender requiredRoles={ ['Администратор', 'Менеджер'] } > */}
        {/* <button className="primary-button" type="button">Добавить пользователя</button> */}
      {/* </RoleBasedRender> */}
      <ObjectsTable 
        objects={ mockObjects } 
        onRowClick={ handleRowClick } 
        onDelete={ handleDelete }
      />
    </div>
  );
}

export default ObjectsPage;

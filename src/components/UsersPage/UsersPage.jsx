import React from 'react';
import UsersTable from './UsersTable/UsersTable';
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';

const mockUsers = [
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
  { name: 'Никаев Фимилион Евлампиевич', address: 'jdshgkjsdhg039g23u0g9u209gu23', mail: 'example@mail.com', role: 'Администратор', lastSeen: new Date().toISOString() },
];

function UsersPage({ history, match }) {
  // in future it is supposed to redirect to /users/:userId, where userId is the id of the user you clicked on
  // then you could get userId by props.match.params.userId in the component for route /users/:userId (check src/routes.js)
  // and make api call to fetch userData, or alternatively get it from redux store, if you stored all users there
  const handleRowClick = event => history.push(`${ match.path }/1`);
  const handleDelete = event => console.log('Clicked delete');

  return (
    <div className="page-content">
      <h1>Пользователи</h1>
      <RoleBasedRender requiredRoles={ ['Администратор', 'Менеджер'] } >
        <button className="primary-button" type="button">Добавить пользователя</button>
      </RoleBasedRender>
      <UsersTable 
        users={ mockUsers } 
        onRowClick={ handleRowClick } 
        onDelete={ handleDelete }
      />
    </div>
  );
}

export default UsersPage;

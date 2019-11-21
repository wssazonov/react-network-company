import React, { useRef } from 'react';
import './PermissionsPage.scss'
import { connect } from 'react-redux';
import AddPermissionsModal from "../modals/AddPermissions/AddPermissions";
import EditPermissionsModal from "../modals/EditPermissions/EditPermissions";
import PermissionsTable from './PermissionsTable/PermissionsTable';


const mockPermissions = [
  { user: { name: 'Сбытовая компания', mail: 'mfburgo@outlook.com', address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756' }, limit: 532 },
  { user: { name: 'Сбытовая компания', mail: 'mfburgo@outlook.com', address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756' }, limit: 15000 },
  { user: { name: 'Сбытовая компания', mail: 'mfburgo@outlook.com', address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756' }, limit: 666 },
  { user: { name: 'Сбытовая компания', mail: 'mfburgo@outlook.com', address: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756' }, limit: 1323 },
];

function Permissions() {
  const childAddPermissionsRef = useRef();
  const childEditPermissionsRef = useRef();

  const handleDelete = event => console.log('Clicked delete');

  const handleRowClick = event => {
    childEditPermissionsRef.current.showModal();
  }

  return (
    <>
      <AddPermissionsModal ref={childAddPermissionsRef}/>
      <EditPermissionsModal ref={childEditPermissionsRef}/>
      <div className="page-content">
        <h1>Разрешения</h1>
        <div className="regular-text permission-text">Тут вы определяете, кто из пользователей сколько денег сможет снять с вашего счёта. При пополнении счёта лимит автоматически поднимается на внесённую сумму. Вы можете уменьшить лимит вручную.</div>
        <button className="primary-button" type="button" onClick={() => childAddPermissionsRef.current.showModal()}>Добавить</button>

        <PermissionsTable
          permissions={ mockPermissions }
          onRowClick={ handleRowClick }
          onDelete={ handleDelete }
        />
      </div>
    </>
  );
}


export default connect()(Permissions);

import React from 'react';
import {Dropdown} from "semantic-ui-react";
import './SettingsPage.scss';

import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import {Link} from "react-router-dom";

const ROLE_OPTIONS = [
  {
    key: 'Клиент',
    text: 'Клиент',
    value: 'Клиент',
  },
  {
    key: 'Администратор',
    text: 'Администратор',
    value: 'Администратор',
  },
];

const TIME_OPTIONS = [
  {
    key: '19:00',
    text: '19:00',
    value: '19:00',
  },
  {
    key: '18:00',
    text: '18:00',
    value: '18:00',
  },
];


function SettingsPage() {
  return (
    <div className='page-content profile-page'>
      <h1>Настройки</h1>
      <div className='app-input-group'>
        <div className='app-input'>
          <label>Время отправки уведомлений потребителям</label>
          <Dropdown
            defaultValue='19:00'
            placeholder='Время отправки уведомлений потребителям'
            fluid
            className="time-send app-dropdown-button"
            selection
            options={TIME_OPTIONS}
          />
        </div>
      </div>

    </div>
  );
}

export default SettingsPage;

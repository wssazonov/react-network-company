import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Dropdown} from "semantic-ui-react";
import './SettingsPage.scss';

import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import {Link} from "react-router-dom";

const LOAD_OPTIONS = [
  {
    key: 'график базовой нагрузки',
    text: 'график базовой нагрузки',
    value: 'график базовой нагрузки',
  },
  {
    key: 'максимальная базовая нагрузка',
    text: 'максимальная базовая нагрузка',
    value: 'максимальная базовая нагрузка',
  },
  {
    key: 'заявленный график нагрузки',
    text: 'заявленный график нагрузки',
    value: 'заявленный график нагрузки',
  }
];

const LOAD_CALIBRATION_OPTIONS = [
  {
    key: 'С подстройкой по вчерашнему рабочему дню',
    text: 'С подстройкой по вчерашнему рабочему дню',
    value: 'С подстройкой по вчерашнему рабочему дню',
  },
  {
    key: 'С подстройкой по позавчерашнему рабочему дню',
    text: 'С подстройкой по позавчерашнему рабочему дню',
    value: 'С подстройкой по позавчерашнему рабочему дню'
  }
];

const ADDRESS_REGION = [
  {
    key: 'Московская область',
    text: 'Московская область',
    value: 'Московская область',
  },
  {
    key: 'Ленинградская область',
    text: 'Ленинградская область',
    value: 'Ленинградская область',
  },
  {
    key: 'ХМАО',
    text: 'ХМАО',
    value: 'ХМАО',
  },
];


const VIEW_OPTIONS = [
  {
    key: 'Все объекты',
    text: 'Все объекты',
    value: 'Все объекты',
  },
  {
    key: 'Объект 1',
    text: 'Объект 1',
    value: 'Объект 1',
  },
  {
    key: 'Объект 2',
    text: 'Объект 2',
    value: 'Объект 2',
  },
  {
    key: 'Объект 3',
    text: 'Объект 3',
    value: 'Объект 3',
  }
];

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

  const {consumerId} = useParams();
  const history = useHistory();
  const [viewOption, setViewOption] = useState([VIEW_OPTIONS[0].value]);
  const handleViewOptionChange = (event, { value }) => setViewOption(value);
  return (
    <div className='page-content setting-page'>
      <h1>Настройки</h1>
      {/* <div className='app-input-group'>
        <div className='app-input'>
          <label>Время отправки уведомлений потребителям</label>
          <Dropdown
            defaultValue='19:00'
            placeholder='Время отправки уведомлений потребителям'
            fluid
            icon='angle down'
            className="time-send app-dropdown-button"
            selection
            options={TIME_OPTIONS}
          />
        </div>
      </div> */}

      <div className="app-input-group">
      <div className="header-block">
          <a name="users"><h1>Пользователи</h1></a>
          <button className='secondary-button hidden'>Добавить</button>
        </div>

        <div className="app-input-group">
          <div className="group-title">
            <a name="users-1"><span>Никаев Филимон Евлампиевич</span></a>
            <button className='secondary-button hidden'>Удалить</button>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Фамилия</label>
            <input value="Никаев"/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Имя</label>
            <input value="Филимон"/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Отчество</label>
            <input value="Евлампиевич"/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Должность</label>
            <input value="Оператор"/>
          </div>
          <div className='app-input medium-input'>
            <label>Электронная почта</label>
            <input value="mfburgo@outlook.com"/>
          </div>
          <div className='app-input small-input'>
            <label>Телефон рабочий</label>
            <input value="8442 182 122"/>
          </div>
          <div className='app-input small-input'>
            <label>Телефон мобильный</label>
            <input value="+7 905 123-45-67"/>
          </div>
          {/* <div className='app-input medium-input-dropdown'>
            <label>Номер сертификата электронной подписи</label>
            <input value="30AE FD63 0000 0000 0619"/>
          </div> */}
          <div className='app-input large-input'>
            <label>Удостоверяющий центр</label>
            <input value="Администратор торговой системы оптового рынка эле"/>
          </div>
          <div className='app-input small-input'>
            <label>Пароль</label>
            <input type='password' value="dsfsdf"/>
          </div>
          <div className='app-input small-input'>
            <label>Кодовое слово</label>
            <input value="почта"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SettingsPage;

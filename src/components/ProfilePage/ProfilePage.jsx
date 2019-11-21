import React from 'react';
import './ProfilePage.scss'
import {Dropdown} from "semantic-ui-react";

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

const TIMEZONE_OPTIONS = [
  {
    key: 'Россия, Москва',
    text: 'Россия, Москва',
    value: 'Россия, Москва',
  },
  {
    key: 'Россия, Владивосток',
    text: 'Россия, Владивосток',
    value: 'Россия, Владивосток',
  },
];

const ADDRESS_OPTIONS = [
  {
    key: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756',
    text: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756',
    value: '0xF76d0e464B59EfEa4861dEb2ca57aEabF2d6B756',
  },
  {
    key: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F',
    text: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F',
    value: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F',
  },
];
function ProfilePage() {
  return (
    <div className='page-content profile-page'>
      <h1>Мой профиль</h1>
      <div className='app-input-group'>
        {/* <RoleBasedRender requiredRoles={ ['Администратор'] } >
          <div className="input-with-help-text">
            <div className='app-input role-select'>
              <label>Роль</label>
              <Dropdown
                placeholder='Роль'
                fluid
                className="small-input app-dropdown-button"
                selection
                options={ROLE_OPTIONS}
              />
            </div>
            <div className="help-text with-margin regular-text">
              Поменяете свою роль — не сможете больше управлять системой ¯\_(ツ)_/¯
            </div>
          </div>
          </RoleBasedRender> */}
        <div className='app-input wide-input'>
          <label>Фамилия, имя, отчество</label>
          <input value='Никаев Филимон Евлампиевич'/>
        </div>
        <div className="input-with-help-text">
          <div className='app-input wide-input'>
            <label>Блокчейновый адрес</label>
            <Dropdown
              placeholder='Блокчейновый адрес'
              search
              fluid
              className="medium-input app-dropdown-search"
              selection
              options={ADDRESS_OPTIONS}
            />
            <button className='secondary-button small-button'>Посмотреть на Эзерскане</button>
          </div>
          <RoleBasedRender requiredRoles={ ['Администратор', 'Менеджер', 'Клиент'] } >
            <div className="help-text regular-text">
              Адрес сперва надо добавить в <Link className="blue-text" to='/addresses'>список</Link>
            </div>
          </RoleBasedRender>
        </div>
        <div className='app-input medium-input'>
          <label>Электронная почта</label>
          <input value='mfburgo@outlook.com'/>
        </div>
        <div className='app-input small-input'>
          <label>Пароль</label>
          <input type='password' value='12345678'/>
        </div>
        <div className='app-input'>
          <label>Часовой пояс</label>
          <Dropdown
            placeholder='Часовой пояс'
            fluid
            className="time-input app-dropdown-button"
            selection
            options={TIMEZONE_OPTIONS}
          />
        </div>
      </div>

      <RoleBasedRender requiredRoles={ ['Клиент'] } >

        <h2>Платёжные реквизиты</h2>
        <div className='app-input-group'>
          <div className='app-input wide-input'>
            <label>Наименование плательщика</label>
            <input value='ОАО «Сетевая компания»'/>
          </div>
          <div className='app-input medium-input'>
            <label>Расчётный счёт</label>
            <input value='40702810500000000072'/>
          </div>
          <div className='app-input wide-input'>
            <label>Наименование банка</label>
            <input value='ООО Банк «Аверс»'/>
          </div>
          <div className='app-input tiny-input'>
            <label>БИК</label>
            <input value='049205774'/>
          </div>
          <div className='app-input small-input'>
            <label>Корреспондентский счет</label>
            <input value='30101810500000000774'/>
          </div>
          <div className='app-input tiny-input'>
            <label>ИНН</label>
            <input value='1653003601'/>
          </div>
          <div className='app-input tiny-input'>
            <label>КПП</label>
            <input value='165501001'/>
          </div>
        </div>

      </RoleBasedRender>
      
      <div className='app-button-group'>
        <button className='primary-button'>Сохранить изменения</button>
        <button className='secondary-button'>Отменить</button>
      </div>
    </div>
  );
}

export default ProfilePage;

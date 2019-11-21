import React, { useState } from 'react';
import './UserProfile.scss'
import { Dropdown } from "semantic-ui-react";
import { connect } from 'react-redux';
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import { Link } from "react-router-dom";

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
  {
    key: 'Менеджер',
    text: 'Менеджер',
    value: 'Менеджер',
  },
  {
    key: 'Наблюдатель',
    text: 'Наблюдатель',
    value: 'Наблюдатель',
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
function UserProfile({ user, onSubmit, title, currentUserRole }) {
  const [formState, setFormState] = useState(user);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formState);
  };

  const resetChanges = event => {
    event.preventDefault();
    setFormState(user);
  };

  const shouldDisable = (currentUserRole === 'Наблюдатель') && (user.role !== 'Наблюдатель');

  return (
    <div className='profile-page'>
      <form>
        <h1>{ title }</h1>
        <div className='app-input-group'>
          {/* <RoleBasedRender requiredRoles={ ['Администратор'] } >
            <div className="input-with-help-text">
              <div className='app-input role-select'>
                <label>Роль</label>
                <Dropdown
                  defaultValue={ formState.role }
                  onChange={ (event, { value }) => setFormState({ ...formState, role: value })}
                  fluid
                  className="small-input app-dropdown-button"
                  selection
                  icon='angle down'
                  options={ ROLE_OPTIONS }
                />
              </div>
              { (title === 'Мой профиль') &&
                <div className="help-text with-margin regular-text">
                  Поменяете свою роль — не сможете больше управлять системой ¯\_(ツ)_/¯
                </div>
              }
            </div>
          </RoleBasedRender> */}
          <div className='app-input wide-input'>
            <label>Фамилия, имя, отчество</label>
            <input value={ formState.name } onChange={ event => setFormState({ ...formState, name: event.target.value })} disabled={ shouldDisable }/>
          </div>
          <div className="input-with-help-text">
            <div className='app-input wide-input'>
              <label>Блокчейновый адрес</label>
              <Dropdown
                defaultValue={ formState.blockChainAddress }
                onChange={ (event, { value }) => setFormState({ ...formState, blockChainAddress: value })}
                search
                fluid
                className="medium-input app-dropdown-search"
                selection
                options={ ADDRESS_OPTIONS }
                disabled={ currentUserRole === 'Клиент' || currentUserRole === 'Наблюдатель' }
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
            <input value={ formState.mail } onChange={ event => setFormState({ ...formState, mail: event.target.value })} disabled={ shouldDisable }/>
          </div>
          <div className='app-input small-input'>
            <label>Пароль</label>
            <input type='password' value={ formState.password } onChange={ event => setFormState({ ...formState, password: event.target.value })} disabled={ shouldDisable }/>
          </div>
          <div className='app-input'>
            <label>Часовой пояс</label>
            <Dropdown
              defaultValue={ formState.timeZone }
              onChange={ (event, { value }) => setFormState({ ...formState, timeZone: value })}
              fluid
              className="time-input app-dropdown-button"
              selection
              icon='angle down'
              options={ TIMEZONE_OPTIONS }
              disabled={ shouldDisable }
            />
          </div>
        </div>

        { (user.role === 'Клиент') &&
          <>
            <h2>Платёжные реквизиты</h2>
            <div className='app-input-group'>
              <div className='app-input wide-input'>
                <label>Наименование плательщика</label>
                <input value={ formState.payerName } onChange={ event => setFormState({ ...formState, payerName: event.target.value })} disabled={ shouldDisable }/>
              </div>
              <div className='app-input medium-input'>
                <label>Расчётный счёт</label>
                <input value={ formState.paymentAccount } onChange={ event => setFormState({ ...formState, paymentAccount: event.target.value })} disabled={ shouldDisable }/>
              </div>
              <div className='app-input wide-input'>
                <label>Наименование банка</label>
                <input value={ formState.bank } onChange={ event => setFormState({ ...formState, bank: event.target.value })} disabled={ shouldDisable }/>
              </div>
              <div className='app-input tiny-input'>
                <label>БИК</label>
                <input className="bik-and-kpp" value={ formState.bik } onChange={ event => setFormState({ ...formState, bik: event.target.value })} disabled={ shouldDisable }/>
              </div>
              <div className='app-input'>
                <label>Корреспондентский счет</label>
                <input className="account" value={ formState.correspondentAccount } onChange={ event => setFormState({ ...formState, correspondentAccount: event.target.value })} disabled={ shouldDisable }/>
              </div>
              <div className='app-input tiny-input'>
                <label>ИНН</label>
                <input className="inn" value={ formState.inn } onChange={ event => setFormState({ ...formState, inn: event.target.value })} disabled={ shouldDisable }/>
              </div>
              <div className='app-input tiny-input'>
                <label>КПП</label>
                <input className="bik-and-kpp" value={ formState.kpp } onChange={ event => setFormState({ ...formState, kpp: event.target.value })} disabled={ shouldDisable }/>
              </div>
            </div>
          </>
        }
 
        { !shouldDisable && (
          <div className='app-button-group'>
            <button className='primary-button' onClick={ handleSubmit }>Сохранить изменения</button>
            <button className='secondary-button' onClick={ resetChanges }>Отменить</button>
          </div>
        )}
        
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUserRole: state.user.role,
});

export default connect(mapStateToProps, null)(UserProfile);

import React, { useState } from 'react';
import './ObjectDetail.scss';
import {Dropdown} from "semantic-ui-react";

import { connect } from 'react-redux';

import RoleBasedRender from '../../RoleBasedRender/RoleBasedRender';
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

const SUBJECT_OPTIONS = [
  {
    key: 'Московская область',
    text: 'Московская область',
    value: 'Московская область',
  },
  {
    key: 'Тюменская область',
    text: 'Тюменская область',
    value: 'Тюменская область',
  },
];
function ObjectDetail({ object, onSubmit}) {

  const [formState, setFormState] = useState(object);

  console.log(formState);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formState);
  };

  const resetChanges = event => {
    event.preventDefault();
    setFormState(object);
  };
  return (
    <div className='profile-page'>
      <div className="header-object">
        <h1>Объекты</h1>
        <span> → Объект 1</span>
      </div>
      
      <div className='app-input-group'>
        <div className='app-input wide-input'>
          <label>Наименование</label>
          <input value='Объект 1'/>
        </div>
        <div className='app-input wide-input'>
          <label>Код ГТП</label>
          <input value='1234567890'/>
        </div>
        <div className="input-with-help-text">
          <div className='app-input wide-input'>
            <label>Субъект РФ</label>
            <Dropdown
              defaultValue={ formState.subject }
              onChange={ (event, { value }) => setFormState({ ...formState, subject: value })}
              placeholder='Субъект РФ'
              fluid
              className="time-input app-dropdown-button"
              selection
              options={SUBJECT_OPTIONS}
            />
          </div>
        </div>
        <div className='app-input'>
          <label>Ценовая зона</label>
          <Dropdown
            defaultValue={ formState.timeZone }
            onChange={ (event, { value }) => setFormState({ ...formState, timeZone: value })}
            fluid
            className="time-input app-dropdown-button"
            selection
            icon='angle down'
            options={ TIMEZONE_OPTIONS }
          />
        </div>
        <div className='app-input wide-input'>
          <label>Гарантирующий поставщик</label>
          <input value='РосКабель'/>
        </div>
        <div className='app-input wide-input'>
          <label>Цена, руб</label>
          <input value='500'/>
        </div>
      </div>
      
      <div className='app-button-group'>
        <button className='primary-button' onClick={ handleSubmit }>Сохранить изменения</button>
        <button className='secondary-button' onClick={ resetChanges }>Отменить</button>
      </div>
    </div>
  );
}

export default ObjectDetail;

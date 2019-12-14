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
        <div className="group-title"><a name="consumer-name">Наименование</a></div>
        <div className='app-input medium-input-dropdown'>
          <label>Сокращенное</label>
          <input value="Потребитель 1"/>
        </div>
        <div className='app-input wide-input'>
          <label>Полное</label>
          <input value="АО «Потребитель 1»" />
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>ID</label>
          <input value="Потребитель 1"/>
        </div>
        <div className='app-input wide-input'>
          <label>Назначение</label>
          <input value="АО «Потребитель 1»" />
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-title">Договор</a></div>
        <div className='app-input medium-input-dropdown'>
          <label>Номер</label>
          <input value="Потребитель 1"/>
        </div>
        <div className='app-input tiny-input'>
          <label>Дата</label>
          <input value="10.10.2018" />
        </div>
        <div className='app-input tiny-input'>
          <label>Период действия</label>
          <input value="10.10.2020"/>
        </div>
        <div className='app-input tiny-input-uom'>
          <label>Индикативный объем снижения потребления</label>
          <div className="with-uom">
            <input value="100" />
            <span className="uom">МВт</span>
          </div>
        </div>
        <div className='app-input wide-input'>
          <label>Цена, руб</label>
          <input value='500'/>
        </div>
        <div className='app-input tiny-input-uom'>
          <label>Индикативная длительность снижения потребления</label>
          <div className="with-uom">
            <input value="120" />
            <span className="uom">мин.</span>
          </div>
        </div>
        <div className='app-input medium-input'>
          <label>Метод определения объема оказанных услуг</label>
          <Dropdown
            defaultValue={ LOAD_OPTIONS[0].value }
            fluid
            className="time-input app-dropdown-button"
            selection
            icon='angle down'
            options={ LOAD_OPTIONS }
          />
        </div>
        <div className='app-input extra-wide-input'>
          <label>Подстройка графика базовой нагрузки</label>
          <Dropdown
            defaultValue={ LOAD_CALIBRATION_OPTIONS[0].value }
            fluid
            className="time-input app-dropdown-button"
            selection
            icon='angle down'
            options={ LOAD_CALIBRATION_OPTIONS }
          />
        </div>
        <div className='app-input tiny-input-uom'>
          <label>Максимальная базовая нагрузка</label>
          <div className="with-uom">
            <input value="100" />
            <span className="uom">МВт</span>
          </div>
        </div>
        <div className='app-input large-input'>
          <label>Объекты по производству электрической энергии</label>
          <input value="" />
        </div>
        <div className='app-input large-input'>
          <label>Способ определения объема потребленной электрической энергии энергопринимающим устройством (расчетная схема)</label>
          <input value="" />
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-address">Юридический адрес</a></div>
        <div className='app-input extra-tiny-input'>
          <label>Почтовый индекс</label>
          <input value="740004" />
        </div>
        <div className='app-input medium-input'>
          <label>Субъект Российской Федерации</label>
          <Dropdown
            defaultValue={ ADDRESS_REGION[0].value }
            fluid
            className="time-input app-dropdown-button"
            selection
            icon='angle down'
            options={ ADDRESS_REGION }
          />
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Город</label>
          <input value="Москва"/>
        </div>
      </div>
      <div className='app-input large-input'>
        <label>Улица</label>
        <input value="Волгоградский проспект"/>
      </div>
      <div className="address-row">
        <div className='app-input'>
          <label>Дом</label>
          <input value="1" />
        </div>
        <div className='app-input'>
          <label>Корпус</label>
          <input value="1а" />
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-real-address">Адрес места нахождения</a></div>
        <div className='app-input extra-tiny-input'>
          <label>Почтовый индекс</label>
          <input value="740004" />
        </div>
        <div className='app-input medium-input'>
          <label>Субъект Российской Федерации</label>
          <Dropdown
            defaultValue={ ADDRESS_REGION[0].value }
            fluid
            className="time-input app-dropdown-button"
            selection
            icon='angle down'
            options={ ADDRESS_REGION }
          />
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Город</label>
          <input value="Москва"/>
        </div>
        <div className='app-input large-input'>
          <label>Улица</label>
          <input value="Волгоградский проспект"/>
        </div>
      </div>
      <div className="address-row">
        <div className='app-input'>
          <label>Дом</label>
          <input value="1" />
        </div>
        <div className='app-input'>
          <label>Корпус</label>
          <input value="1а" />
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-abbrev">Реквизиты</a></div>
        <div className='app-input medium-input-dropdown'>
          <label>ИНН</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>КПП</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>ОГРН</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>ОКПО</label>
          <input value=""/>
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-bank">Банковские реквизиты</a></div>
        <div className='app-input large-input'>
          <label>Наименование банка</label>
          <input value=""/>
        </div>
        <div className='app-input tiny-input-uom'>
          <label>БИК банка</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Корреспондентский счет</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Расчетный счет</label>
          <input value=""/>
        </div>
        <div className='app-input large-input'>
          <label>Адрес банка</label>
          <input value=""/>
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-mail">Электронная почта</a></div>
        <div className='app-input medium-input-dropdown'>
          <label>Основная</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Дополнительная</label>
          <input value=""/>
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title"><a name="consumer-contact">Контактное лицо</a></div>
        <div className='app-input large-input'>
          <label>ФИО</label>
          <input value=""/>
        </div>
        <div className='app-input large-input'>
          <label>Должность</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Электронная почта</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Телефон рабочий</label>
          <input value=""/>
        </div>
        <div className='app-input medium-input-dropdown'>
          <label>Телефон мобильный</label>
          <input value=""/>
        </div>
      </div>

    </div>
  );
}

export default SettingsPage;

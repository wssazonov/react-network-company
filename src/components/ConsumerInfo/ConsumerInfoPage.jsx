import React from 'react';
import {useParams} from "react-router-dom";
import Table from '../Table/Table'
import {Dropdown} from "semantic-ui-react";

const documentsTable = {
  columns: [
    {title: "Документ"},
    {title: "Дата загрузки"}
    ],
  rows: [
    { document: "Скан прибора учёта", addedAt: "06.10.2019 14:30" },
    { document: "Скан прибора учёта", addedAt: "06.10.2019 14:30" },
    { document: "Скан прибора учёта", addedAt: "06.10.2019 14:30" },
    { document: "Скан прибора учёта", addedAt: "06.10.2019 14:30" }
  ]
};

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

function ConsumerInfoPage(props) {

  const {consumerId} = useParams();
  return (
    <div className="page-content">
      <div className="header-block">
        <h1>Документы</h1>
        <button className='secondary-button hidden'>Добавить</button>
      </div>
      <div>
        <Table data={ documentsTable.rows } columns={ documentsTable.columns }></Table>
      </div>
      <div className="regular-text">Эти и другие файлы доступны <a className="blue-link" href='/documents'>в разделе Документы</a></div>


      <div className="header-block">
        <h1>Потребитель</h1>
        <button className='secondary-button hidden'>Добавить</button>
      </div>

      <div className="app-input-group">
        <div className="group-title">Наименование</div>
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
        <div className="group-title">Договор</div>
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
          <label>Способ определения объема потребленной электрической энергии энергопринимающим устройством (расчетная схема)</label>
          <input value="" />
        </div>
      </div>

      <div className="app-input-group">
        <div className="group-title">Юридический адрес</div>
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
        <div className="group-title">Адрес места нахождения</div>
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
    </div>
  );
}

export default ConsumerInfoPage;

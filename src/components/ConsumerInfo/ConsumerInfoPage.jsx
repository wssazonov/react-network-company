import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from "react-router-dom";
import Table from '../Table/Table'
import {Dropdown} from "semantic-ui-react";
import './ConsumerInfoPage.scss';

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

const CHANNEL_OPTIONS = [
  {
    key: '01',
    text: '01',
    value: '01',
  },
  {
    key: '02',
    text: '02',
    value: '02',
  }
];

const ENERGY_TRANSFER_OPTIONS = [
  {
    key: 'Прием',
    text: 'Прием',
    value: 'Прием',
  },
  {
    key: 'Отдача',
    text: 'Отдача',
    value: 'Отдача',
  }
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

function ConsumerInfoPage(props) {

  const {consumerId} = useParams();
  const history = useHistory();
  const [viewOption, setViewOption] = useState([VIEW_OPTIONS[0].value]);
  const handleViewOptionChange = (event, { value }) => setViewOption(value);

  return (
    <div className="page-content consumer-profile">
      <div className="links-block">
        <div className="links-block__links regular-text">
          <a className="parent-node" href="#consumer">Потребитель</a>
          <a href="#consumer-name">Наименование</a>
          <a href="#consumer-title">Договор</a>
          <a href="#consumer-address">Юридический адрес</a>
          <a href="#consumer-real-address">Место нахождения</a>
          <a href="#consumer-bank">Банковские реквизиты</a>
          <a href="#consumer-mail">Электронная почта</a>
          <a href="#consumer-contact">Контактное лицо</a>
          <a className="parent-node" href="#tools">Приборы учёта</a>
          <a href="#tools-1">Прибор учёта ЭАО «Потребитель 1»</a>
          <a className="parent-node" href="#users">Пользователи</a>
          <a href="#users-1">Никаев Филимон Евлампиевич</a>
        </div>

        <div className='app-button-group'>
          <button className='primary-button'>Сохранить</button>
          <button className='secondary-button' onClick={() => history.push('/consumers')}>Отмена</button>
        </div>

      </div>

      <div>
        <div className="header-block">
          <h1>Документы</h1>
          <button className='secondary-button hidden'>Добавить</button>
        </div>
        <div>
          <Table data={ documentsTable.rows } columns={ documentsTable.columns }></Table>
        </div>
        <div className="regular-text documents-text">Эти и другие файлы доступны <a className="blue-link" href='/documents'>в разделе Документы</a></div>


        <div className="header-block">
          <a name="consumer"><h1>Потребитель</h1></a>
          <button className='secondary-button hidden'>Добавить</button>
        </div>

        <Dropdown
          defaultValue={VIEW_OPTIONS[0].value}
          fluid
          className="small-input app-dropdown-button"
          selection
          icon='angle down'
          onChange={ handleViewOptionChange }
          options={ VIEW_OPTIONS }
        />

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

        <div className="header-block">
          <a name="tools"><h1>Приборы учёта</h1></a>
          <button className='secondary-button hidden'>Добавить</button>
        </div>

        <button className='primary-button flex-row'>Загрузить данные о ПУ из файла</button>

        <div className="app-input-group">
          <div className="group-title">
            <a name="tools-1"><span>Прибор учёта ЭАО «Потребитель 1»</span></a>
            <button className='secondary-button hidden'>Удалить</button>
          </div>
          <div className='app-input large-input'>
            <label>Наименование энергопринимающего устройства</label>
            <input value=""/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Код точки измерения</label>
            <input value=""/>
          </div>
          <div className='app-input large-input'>
            <label>Место расположения</label>
            <input value=""/>
          </div>
          <div className='app-input large-input'>
            <label>Балансовая принадлежность</label>
            <input value=""/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Марка или тип</label>
            <input value=""/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Заводской номер</label>
            <input value=""/>
          </div>
          <div className='app-input medium-input-dropdown'>
            <label>Дата следующей поверки</label>
            <input value=""/>
          </div>
          <div className='app-input extra-tiny-input'>
            <label>Измерительный канал</label>
            <Dropdown
              defaultValue={ CHANNEL_OPTIONS[0].value }
              fluid
              className="time-input app-dropdown-button"
              selection
              icon='angle down'
              options={ CHANNEL_OPTIONS }
            />
          </div>
          <div className='app-input tiny-input'>
            <label>Способ определения объема потребленной электрической энергии</label>
            <Dropdown
              defaultValue={ ENERGY_TRANSFER_OPTIONS[0].value }
              fluid
              className="time-input app-dropdown-button"
              selection
              icon='angle down'
              options={ ENERGY_TRANSFER_OPTIONS }
            />
          </div>
        </div>

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

export default ConsumerInfoPage;

import React from 'react';
import {useParams} from "react-router-dom";
import Table from '../Table/Table'

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
}

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
      </div>
    </div>
  );
}

export default ConsumerInfoPage;

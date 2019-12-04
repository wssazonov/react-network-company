import React, { useState, useEffect } from 'react';

import {eventsData} from "../../MockData/EventsMockDataNow";
import {Dropdown} from "semantic-ui-react";
import {useHistory} from "react-router";
import '../Consumers/Consumers.scss';
import './EventsPage.scss';


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

function EventsPageNow() {

  const [events, setEvents] = useState(eventsData);
  const [selected, setSelected] = useState(eventsData.filter(x => x.selected).length);
  const history = useHistory();
  const [viewOption, setViewOption] = useState([VIEW_OPTIONS[0].value]);
  const handleViewOptionChange = (event, { value }) => setViewOption(value);
  const valueSum1 = events.reduce((a, c) => a + c.countPlan, 0).toFixed(2);
  const valueSum2 = events.reduce((a, c) => a + c.countFact, 0).toFixed(2);

  const rowClicked = (id) => {
    history.push(`/dr-events/${id}`);
  };

  return (
    <div className="page-content">
      <div className="header-object">
        <h1>События</h1>
        <span> → Текущее событие</span>
      </div>
      <div className='flex-row'>
        <Dropdown
          defaultValue={VIEW_OPTIONS[0].value}
          fluid
          className="app-dropdown-button date-range-selector small-input dropdown-margin"
          selection
          icon='angle down'
          onChange={ handleViewOptionChange }
          options={ VIEW_OPTIONS }
        />
      </div>
      <div className="regular-text">Время события</div>
      <div className="balance-value">17:00 - 21:00</div>
      <table className="table events-table">
        <thead>
          <tr>
            <th>Объект</th>
            <th>Потребитель</th>
            <th>Способ рассчета</th>
            <th className="wide-cell">Снижение <span>кВт·ч</span></th>
            <th>Статус</th>
          </tr>
          <tr>
            <th/>
            <th/>
            <th/>
            <th className="wide-cell">
              <div className="participants-count">
                <div>Плановое</div>
                <div>Фактическое</div>
              </div>
            </th>
            <th/>
          </tr>
        </thead>
        <tbody>
        <tr className="sub-header">
          <td/>
          <td>Сумма</td>
          <td/>
          <td>
            <div className="participants-count">
              <div>{ valueSum1 }</div>
              <div>{ valueSum2 }</div>
            </div>
          </td>
          <td/>
        </tr>
        { events.map((item, index) => (
          <tr key={index} onClick={() => rowClicked(item.id)}>
            <td>{ item.object }</td>
            <td>{ item.user }</td>
            <td >{ item.method }</td>
            <td>
              <div className="participants-count">
                <div className={item.countPlan === 0 ? "zero-value" : ""}>{ item.countPlan }</div>
                <div className={item.countPlan === 0 ? "zero-value" : ""}>{ item.countFact }</div>
              </div>
            </td>
            <td className="button-status">
              { item.status ? "Выполняется" : "Завершено" }
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <div className="downloadActs">
        <p>Скачать акты</p>
        <p><span>оказания услуг Агрегатор-Потребитель</span></p>
        <p><span>оказания услуг Агрегатор-СО</span></p>
        <p><span>о фактическом объеме оказанных Агрегатором услуг</span></p>

        <p className="normal">После скачивания вы сможете отправить файлы системному оператору &nbsp;<span> в разделе Документы → Акты</span></p>

      </div>
    </div>
  );
}

export default EventsPageNow;

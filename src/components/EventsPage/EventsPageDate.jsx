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
  const valueSum = events.reduce((a, c) => a + c.value, 0).toFixed(2);
  const [viewOption, setViewOption] = useState([VIEW_OPTIONS[0].value]);
  const handleViewOptionChange = (event, { value }) => setViewOption(value);


  const toggleStatus = (item, event) => {
    event.stopPropagation();
    item.status = !item.status;
    const newEvents = Object.assign([], events);
    setEvents(newEvents);
  };

  const rowClicked = (id) => {
    history.push(`/dr-events/${id}`);
  };

  return (
    <div className="page-content">
      <div className="header-object">
        <h1>События</h1>
        <span> → 15.01.2019</span>
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
      <table className="table">
        <thead>
          <tr>
            <th>Объект</th>
            <th>Потребитель</th>
            <th>Способ рассчета</th>
            <th>Снижение <span>кВт·ч</span></th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
        <tr className="sub-header">
          <td/>
          <td>Сумма</td>
          <td/>
          <th>
            <td>{ valueSum }</td>
            <td>{ valueSum } </td>
          </th>
          <td/>
        </tr>
        { events.map((item, index) => (
          <tr key={index} onClick={() => rowClicked(item.id)}>
            <td>{ item.object }</td>
            <td>{ item.user }</td>
            <td >{ item.method }</td>
            <th>
              <td className={item.countPlan === 0 ? "zero-value" : ""}>{ item.countPlan }</td>
              <td className={item.countFact === 0 ? "zero-value" : ""}>{ item.countFact }</td>
            </th>
            <td className={ (item.status ? "active" : "not-active") + ' button-status'}>
              { item.status ? "Успешно" : "Неуспешно" }
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

      </div>
    </div>
  );
}

export default EventsPageNow;

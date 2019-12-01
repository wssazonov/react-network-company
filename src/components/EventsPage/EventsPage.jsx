import React, { useState, useEffect } from 'react';

import {eventsData} from "../../MockData/EventsMockData";
import {Dropdown} from "semantic-ui-react";
import {useHistory} from "react-router";


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

const dateFilterOptions = [
  {
    key: '1 января 2019 - 1 сентября 2019',
    text: '1 января 2019 - 1 сентября 2019',
    value: '1 января 2019 - 1 сентября 2019',
  },
  {
    key: '1 сентября 2019 - 1 октября 2019',
    text: '1 сентября 2019 - 1 октября 2019',
    value: '1 сентября 2019 - 1 октября 2019',
  },
];

function EventsPage() {

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

  const handleCheckbox = (item, event) => {
    event.stopPropagation();
    item.selected = !item.selected;
    item.selected ? setSelected(selected + 1) : setSelected(selected - 1)
    const newEvents = Object.assign([], events);
    setEvents(newEvents);
  };

  const rowClicked = (id) => {
    history.push(`/dr-events/${id}`);
  };

  return (
    <div className="page-content">
      <div className="header-block">
        <h1>События</h1>
      </div>
      <div className='flex-row'>
        <Dropdown
          defaultValue={VIEW_OPTIONS[0].value}
          fluid
          className="app-dropdown-button date-range-selector small-input dropdown-margin"
          selection
          onChange={ handleViewOptionChange }
          options={ VIEW_OPTIONS }
        />
        <Dropdown
          defaultValue={dateFilterOptions[0].value}
          fluid
          className="app-dropdown-button date-range-selector dropdown-margin"
          selection
          onChange={ handleViewOptionChange }
          options={ dateFilterOptions }
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Дата и время</th>
            <th>Объект</th>
            <th>Число участников
              <td><tr>Плановое</tr></td>
              <td><tr>Фактическое</tr></td>
            </th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
        <tr className="sub-header">
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
            <td >{ item.date }</td>
            <td>{ item.object }</td>
            <th>
              <td className={item.countPlan === 0 ? "zero-value" : ""}>{ item.countPlan }</td>
              <td className={item.countFact === 0 ? "zero-value" : ""}>{ item.countFact }</td>
            </th>
            <td className={ (item.status ? "active" : "not-active") + ' button-status'}>
              { item.status ? "Выполняется" : "Завершено" }
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventsPage;

import React, { useState, useEffect } from 'react';

import {eventsData} from "../../MockData/EventsMockData";
import {Dropdown} from "semantic-ui-react";
import {useHistory} from "react-router";
import '../Consumers/Consumers.scss';


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
  const valueSum1 = events.reduce((a, c) => a + c.countPlan, 0).toFixed(2);
  const valueSum2 = events.reduce((a, c) => a + c.countFact, 0).toFixed(2);
  const [viewOption, setViewOption] = useState([VIEW_OPTIONS[0].value]);
  const handleViewOptionChange = (event, { value }) => setViewOption(value);

  const rowClicked = (item) => {
    console.log(item.status);
    item.status ? history.push(`/dr-events/now/${item.id}`) : history.push(`/dr-events/${item.id}`);
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
          icon='angle down'
          className="app-dropdown-button date-range-selector small-input dropdown-margin"
          selection
          onChange={ handleViewOptionChange }
          options={ VIEW_OPTIONS }
        />
        <Dropdown
          defaultValue={dateFilterOptions[0].value}
          fluid
          icon='angle down'
          className="app-dropdown-button date-range-selector dropdown-margin"
          selection
          onChange={ handleViewOptionChange }
          options={ dateFilterOptions }
        />
      </div>
      <table className="table events-table">
        <thead>
          <tr>
            <th>Дата и время</th>
            <th>Объект</th>
            <th>Число участников</th>
            <th>Статус</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th className="wide-cell">
              <div className="participants-count">
                <div>Плановое</div>
                <div>Фактическое</div>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        <tr className="sub-header">
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
          <tr key={index} onClick={() => rowClicked(item)} className={item.status ? 'bold-row' : ''}>
            <td >{ item.date }</td>
            <td>{ item.object }</td>
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
    </div>
  );
}

export default EventsPage;

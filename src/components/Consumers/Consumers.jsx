import React, { useState, useEffect } from 'react';
import {consumersData} from "../../MockData/ConsumersMockData";
import './Consumers.scss'
import Checkbox from '@material-ui/core/Checkbox';
import ObjectsTable from "../ObjectsPage/ObjectsTable/ObjectsTable";
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

function Consumers() {

  const [consumers, setConsumers] = useState(consumersData);
  const [selected, setSelected] = useState(consumersData.filter(x => x.selected).length);
  const history = useHistory();
  const valueSum = consumers.reduce((a, c) => a + c.value, 0).toFixed(2);
  const [viewOption, setViewOption] = useState([VIEW_OPTIONS[0].value]);
  const handleViewOptionChange = (event, { value }) => setViewOption(value);


  const toggleStatus = (item, event) => {
    event.stopPropagation();
    item.status = !item.status;
    const newConsumers = Object.assign([], consumers);
    setConsumers(newConsumers);
  };

  const handleCheckbox = (item, event) => {
    event.stopPropagation();
    item.selected = !item.selected;
    item.selected ? setSelected(selected + 1) : setSelected(selected - 1)
    const newConsumers = Object.assign([], consumers);
    setConsumers(newConsumers);
  };

  const rowClicked = (id) => {
    history.push(`/consumers/${id}`);
  };

  const deleteItem = (item, event) => {
    event.stopPropagation();
    setConsumers(consumers.filter(x => x.id !== item.id));
  }

  return (
    <div className="page-content">
      <div className="header-block">
        <h1>Потребители</h1>
        <button className='secondary-button hidden'>добавить</button>
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
      <table className="table">
        <thead>
        <tr>
          <th>Потребитель</th>
          <th>Объект</th>
          <th>Объём снижения <span className="units">кВт</span></th>
          <th>Длительность снижения</th>
          <th>Способ определения объема</th>
          <th>Статус</th>
          <th>Выбран для скачивания</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        <tr className="sub-header">
          <td>Сумма</td>
          <td/>
          <td>{ valueSum }</td>
          <td/>
          <td/>
          <td/>
          <td>{ selected }</td>
        </tr>
        { consumers.map((item, index) => (
          <tr key={index} onClick={() => rowClicked(item.id)}>
            <td >{ item.name }</td>
            <td>{ item.object }</td>
            <td className={item.value === 0 ? "zero-value" : ""}>{ item.value }</td>
            <td>{ item.duration } ч.</td>
            <td>{ item.method }</td>
            <td className={ (item.status ? "active" : "not-active") + ' button-status'}>
              { item.status ? "Активен" : "Не активен" }
              <div className="activate-button" onClick={(event) => toggleStatus(item, event)}>{ item.status ? "Деактивировать" : "Активировать" }</div>
            </td>
            <td>
              <Checkbox
                checked={item.selected}
                onChange={(event) => handleCheckbox(item, event)}
                onClick={(e) => e.stopPropagation()}
                color="primary"
                disableRipple={true}
                className="custom-checkbox"
              />
            </td>
            <td>
              <button onClick={(event) => deleteItem(item, event)} className="delete-button secondary-button">Удалить</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      <button className="download-button primary-button">Скачать данные о ПУ выбранных потребителей</button>
    </div>
  );
}

export default Consumers;

import React from "react";
import { formatDate } from '../../utils';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import './DateTimerPicker.scss';


function DateTimePicker () {
  return (
    <div className="datePicker">
      <SemanticDatepicker locale="ru-RU" clearable={false} icon="angle down icon" type="range" format="DD-MM-YYYY"/>
    </div>
  )

};

export default DateTimePicker;
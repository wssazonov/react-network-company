import React from "react";
import DatePicker, { registerLocale, ReactDatePickerProps } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
// import './DateTimePicker.scss';

registerLocale("ru", ru);
function DateTimePicker () {
  return (
    <DatePicker
      locale="ru"
      className={"date-time-picker__input"}
      popperClassName={"date-time-picker__popper"}
      dateFormat="dd.MM.yyyy"
      dayClassName={(date) => {
        if (new Date(date).getDay() === 0 || new Date(date).getDay() === 6) {
          return "weekend";
        }
        return "working";
      }}
    />
  )

};

export default DateTimePicker;
import React from "react";
import './PickChart.scss';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    height: 300
  },
  title: {
    text: 'График нагрузки потребления'
  },
  xAxis: {
      categories: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
        '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  series: [{
      data: [1, 2, 2, 4, 5, 6, 5, 8, 6, 4, 2, 3, 4, 7, 6, 7, 8, 9, 7, 2, 3, 4, 5, 6],
      step: 'right',
      name: 'МВт·ч'
  }]
}

function PickChart () {
  return (
    <div className="pickChart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  )

};

export default PickChart;
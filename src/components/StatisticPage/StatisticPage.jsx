import React, {useRef} from 'react';
import './StatisticPage.scss';
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import StatisticAgregatorPage from './StatisticAgregatorPage/StatisticAgregatorPage';
import StatisticObjectPage from './StatisticObjectPage/StatisticObjectPage';
import StatisticUserPage from './StatisticUserPage/StatisticUserPage';
import StatisticDevicePage from './StatisticDevicePage/StatisticDevicePage';

function StatisticPage() {

  return (
    <div className="page-content addresses-page">
      {/* <h1>Статистика <span>Агрегатор</span></h1>      */}
      <StatisticAgregatorPage />
      <StatisticObjectPage />
      <StatisticUserPage />
      <StatisticDevicePage />
    </div>
  );
}

export default StatisticPage;

import React, {useRef} from 'react';
import DocumentsInfo from './DocumentsInfo/DocumentsInfo';
import './DocumentsPage.scss';
import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import DocumentsReady from './DocumentsReady/DocumentsReady';
import DocumentsConsumption from './DocumentsConsumption/DocumentsConsumption';
import DocumentsActs from './DocumentsActs/DocumentsActs';
import DocumentsEvents from './DocumentsEvents/DocumentsEvents';

import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Сведения',
    render: () => <Tab.Pane attached={false}><DocumentsInfo /></Tab.Pane>,
  },
  // {
  //   menuItem: 'Готовность',
  //   render: () => <Tab.Pane attached={false}><DocumentsReady /></Tab.Pane>,
  // },
  {
    menuItem: 'Потребление',
    render: () => <Tab.Pane attached={false}><DocumentsConsumption /></Tab.Pane>,
  },
  {
    menuItem: 'Акты',
    render: () => <Tab.Pane attached={false}><DocumentsActs /></Tab.Pane>,
  },
  {
    menuItem: 'DR-события',
    render: () => <Tab.Pane attached={false}><DocumentsEvents /></Tab.Pane>,
  },
]

function DocumentsPage() {

  return (
    <div className="page-content addresses-page">
      <h1>Документы</h1>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
}

export default DocumentsPage;

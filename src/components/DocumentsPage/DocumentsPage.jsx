import React, {useRef} from 'react';
import DocumentsNavPage from './DocumentsNavPage/DocumentsNavPage';
import DocumentsInfo from './DocumentsInfo/DocumentsInfo';

import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import DocumentsReady from './DocumentsReady/DocumentsReady';
import DocumentsConsumption from './DocumentsConsumption/DocumentsConsumption';
import DocumentsActs from './DocumentsActs/DocumentsActs';

import { Tab } from 'semantic-ui-react'

const panes = [
  {
    menuItem: 'Сведения',
    render: () => <Tab.Pane attached={false}><DocumentsInfo /></Tab.Pane>,
  },
  {
    menuItem: 'Готовность',
    render: () => <Tab.Pane attached={false}><DocumentsReady /></Tab.Pane>,
  },
  {
    menuItem: 'Потребление',
    render: () => <Tab.Pane attached={false}><DocumentsConsumption /></Tab.Pane>,
  },
  {
    menuItem: 'Акты',
    render: () => <Tab.Pane attached={false}><DocumentsActs /></Tab.Pane>,
  },
]

function DocumentsPage() {

  return (
    <div className="page-content addresses-page">
      <h1>Документы</h1>
      {/* <DocumentsNavPage /> */}
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      
      
      
    </div>
  );
}

export default DocumentsPage;

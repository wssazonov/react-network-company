import React, {useRef} from 'react';
import DocumentsNavPage from './DocumentsNavPage/DocumentsNavPage';
import DocumentsInfo from './DocumentsInfo/DocumentsInfo';

import RoleBasedRender from '../RoleBasedRender/RoleBasedRender';
import DocumentsReady from './DocumentsReady/DocumentsReady';
import DocumentsConsumption from './DocumentsConsumption/DocumentsConsumption';
import DocumentsActs from './DocumentsActs/DocumentsActs';

function DocumentsPage() {

  return (
    <div className="page-content addresses-page">
      <h1>Документы</h1>
      <DocumentsNavPage />
      <DocumentsInfo />
      <DocumentsReady />
      <DocumentsConsumption />
      <DocumentsActs />
    </div>
  );
}

export default DocumentsPage;

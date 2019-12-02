import React, { useState } from 'react';
import ObjectDetail from '../ObjectDetail/ObjectDetail';
import { Dropdown } from 'semantic-ui-react';

const mockUser = {
  id: 5,
  object: 'Администратор',
  gtp: '1234567890',
  subject: 'Московская область',
  timeZone: 'Россия, Москва',
  guaranteeingSupplier: 'РосКабель'
};



function ObjectDetailPage() {
  
  const handleSubmit = event => console.log('Clicked Submit');

  // Only for demonstaration
  const [viewOption, setViewOption] = useState('Клиент');
  // Only for demonstaration
  const handleViewOptionChange = (event, { value }) => setViewOption(value);
  // Only for demonstaration
  const whatKindOfUserToDisplay = mockUser;

  console.log(whatKindOfUserToDisplay);

  return (
    <div className="page-content">
      { /* Only for demonstaration */}
      {/* <Dropdown
        defaultValue="Клиент"
        fluid
        className="small-input app-dropdown-button"
        selection
        onChange={ handleViewOptionChange }
        options={ VIEW_OPTIONS }
      /> */}
      <ObjectDetail title='Профиль пользователя' object={ whatKindOfUserToDisplay } onSubmit={ handleSubmit }/>
    </div>
  );
}


export default ObjectDetailPage;
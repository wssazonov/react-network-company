import React, { useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import { Dropdown } from 'semantic-ui-react';

const mockUser = {
  id: 5,
  role: 'Администратор',
  mail: 'example@mail.com',
  name: 'Никаев Филимон Евлампиевич',
  blockChainAddress: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F',
  password: 'password',
  timeZone: 'Россия, Москва',
};

const mockClient = {
  id: 5,
  role: 'Клиент',
  mail: 'example@mail.com',
  name: 'Никаев Филимон Евлампиевич',
  blockChainAddress: '0x71Dc5c85D8f7128459b1e146A9CfFdD7999A9e3F',
  password: 'password',
  timeZone: 'Россия, Москва',
  payerName: 'ОАО «Сетевая компания»',
  paymentAccount: '40702810500000000072',
  bank: 'ООО Банк «Аверс»',
  bik: '049205774',
  correspondentAccount: '30101810500000000774',
  inn: '1653003601',
  kpp: '165501001',
};

// Only for demonstraion
const VIEW_OPTIONS = [
  {
    key: 'Клиент',
    text: 'Клиент',
    value: 'Клиент',
  },
  {
    key: 'А, М, Н',
    text: 'А, М, Н',
    value: 'Others',
  }
];

function UserProfilePage() {
  
  const handleSubmit = event => console.log('Clicked Submit');

  // Only for demonstaration
  const [viewOption, setViewOption] = useState('Клиент');
  // Only for demonstaration
  const handleViewOptionChange = (event, { value }) => setViewOption(value);
  // Only for demonstaration
  const whatKindOfUserToDisplay = viewOption === 'Клиент' ? mockClient : mockUser;

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
      <UserProfile title='Профиль пользователя' user={ whatKindOfUserToDisplay } onSubmit={ handleSubmit }/>
    </div>
  );
}


export default UserProfilePage;
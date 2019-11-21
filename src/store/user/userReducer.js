import { ACTION_SET_USER_ROLE } from "./actions";

const defaultState = {
  id: 5,
  role: 'Администратор',
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

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTION_SET_USER_ROLE: {
      return { ...state, role: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
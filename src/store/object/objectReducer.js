const defaultState = {
  id: 5,
  object: 'Администратор',
  gtp: '1234567890',
  subject: 'Московская область',
  timeZone: 'Россия, Москва',
  guaranteeingSupplier: 'РосКабель'
};

const objectReducer = (state = defaultState, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
};

export default objectReducer;
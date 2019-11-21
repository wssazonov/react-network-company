import { ACTION_SET_CONTRACT_STATUS } from "./actions";

const defaultState = {
  status: true
};

const contractReducer = (state = defaultState, action) => {
  switch(action.type) {
    case ACTION_SET_CONTRACT_STATUS: {
      return { ...state, status: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default contractReducer;
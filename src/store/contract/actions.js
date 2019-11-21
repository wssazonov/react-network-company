export const ACTION_SET_CONTRACT_STATUS = 'ACTION_SET_CONTRACT_STATUS';

export const setContractStatus = status => ({
  type: ACTION_SET_CONTRACT_STATUS,
  payload: status
});
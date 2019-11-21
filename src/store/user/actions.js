export const ACTION_SET_USER_ROLE = 'ACTION_SET_USER_ROLE';

export const setUserRole = role => ({
  type: ACTION_SET_USER_ROLE,
  payload: role
});
import { USER_LOGIN, USER_LOGOUT, USER_ONLINE } from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, {
        uid: action.payload.uid,
        displayName: action.payload.displayName,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      });
    case USER_ONLINE:
      return Object.assign({}, state, { connectionKey: action.payload.key });
    case USER_LOGOUT:
      return Object.assign({}, state, {
        uid: null,
        displayName: '',
        firstname: '',
        lastname: '',
        connectionKey: '',
      });
    default:
      return state;
  }
}

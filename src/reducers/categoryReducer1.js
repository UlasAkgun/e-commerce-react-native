import { CATEGORY_FETCHED } from '../constants/actionTypes';

export default function category(state = {}, action) {
  switch (action.type) {
    case CATEGORY_FETCHED:
      return Object.assign({}, ...state, { step: action.payload });
    default:
      return state;
  }
}

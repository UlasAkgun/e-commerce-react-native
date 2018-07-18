import { ALL_WISHES_FETCHED } from '../constants/actionTypes';

export default function wishes(state = { allWishes: [] }, action) {
  switch (action.type) {
    case ALL_WISHES_FETCHED:
      return Object.assign({}, ...state, { allWishes: state.allWishes.concat(action.payload) });
    default:
      return state;
  }
}

import { USER_INVENTORY_FETCHED, USER_INVENTORY_ADDED } from '../constants/actionTypes';

export default function (state = {inventory: []}, action) {
  switch (action.type) {
    case USER_INVENTORY_FETCHED:
      return Object.assign({}, state, {
        inventory: action.payload.inventoryItems,
      });
      case USER_INVENTORY_ADDED:
      return Object.assign({}, state, {
        inventory: state.inventory.concat([action.payload]),
      });

    default:
      return state;
  }
}

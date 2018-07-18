import 'whatwg-fetch';
import { endpoint } from './config';
import history from '../history';
import {
  USER_INVENTORY_FETCHED,
  USER_INVENTORY_ADDED,
} from '../constants/actionTypes';

export function getUserInventory(userId) {
  return function (dispatch) {
    const endPoint = `${endpoint}inventories/getUserInventory?userId=${userId}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: USER_INVENTORY_FETCHED,
          payload: json,
        });
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
  };
}
export function addUserInventoryItem(title, description, uid) {
  return function (dispatch) {
    const endPoint = `${endpoint}inventories/`;
    fetch(endPoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        userId: uid,
      }),
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: USER_INVENTORY_ADDED,
          payload: json,
        });
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
  };
}
export function editUserInventoryItem(title, description, uid) {
  return function (dispatch) {
    const endPoint = `${endpoint}inventories/`;
    fetch(endPoint, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        userId: uid,
      }),
    })
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: USER_INVENTORY_ADDED,
          payload: json,
        });
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
  };
}

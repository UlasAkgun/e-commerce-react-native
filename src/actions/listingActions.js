import 'whatwg-fetch';
import { endpoint } from './config';
import {
  ALL_WISHES_FETCHED
} from '../constants/actionTypes';

export function getAllWishes(skip) {
  return function (dispatch, getState) {
    const filter = `?filter[order]=creationDate desc&filter[limit]=10&filter[skip]=${skip}`;
    const endPoint = `${endpoint}wishes`;
    fetch(endPoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((json) => {
        if (json.error) {
          // dispatch({
          //   type: CLEAR_CACHED_AD,
          // });
        } else {
          dispatch({
            type: ALL_WISHES_FETCHED,
            payload: json,
          });
        }
      })
      .catch((error) => {

        console.log('parsing failed', error);
      });
  };
}
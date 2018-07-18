import { isEqual, values } from 'lodash';

import {
  HEADER_MENUITEM_CHANGED,
  MESSAGE_RECEIVED,
  NOTIFICATION_FETCHED,
  USER_LOGOUT,
} from '../constants/actionTypes';

export default function (state = { msgNotifications: [] }, action) {
  switch (action.type) {
    case HEADER_MENUITEM_CHANGED:
      return Object.assign({}, state, { activeMenuItem: action.payload });
    case NOTIFICATION_FETCHED:
      // const nArray = values(action.payload);

      const keys = Object.keys(action.payload);
      const nArray = keys.map((key) => {
        const item = action.payload[key];
        item.id = key;
        return item;
      });
      const msgNotifications = [];

      for (let index = 0; index < nArray.length; index++) {
        const receivedMessage = nArray[index];
        switch (receivedMessage.type) {
          case 'Message': {
            const newNotifications = state.msgNotifications.filter((item) => {
              return !isEqual(receivedMessage, item);
            });
            msgNotifications.push(receivedMessage);
          }
          default:
        }
      }
      return Object.assign({}, state, { msgNotifications });

      // nArray.map((receivedMessage) => {
      //   switch (receivedMessage.type) {
      //     case 'Message':
      //       const newNotifications = state.msgNotifications.filter((item) => {
      //         return !isEqual(receivedMessage, item);
      //       });
      //       newNotifications.push(receivedMessage);
      //       return Object.assign({}, state, { msgNotifications: newNotifications });
      //     default: 
      //   }
      // });
      // {
      //   switch (action.payload && action.payload.type) {
      //     case 'Message':
      //       const receivedMessage = action.payload.data.message;
      //       const newNotifications = state.msgNotifications.filter((item) => {
      //         return !isEqual(receivedMessage, item);
      //       });
      //       newNotifications.push(receivedMessage);
      //       return Object.assign({}, state, { msgNotifications: newNotifications });
      //     default:
      //   }
      // }
      // return Object.assign({}, state, { activeMenuItem: action.payload });
      return state;
    case USER_LOGOUT:
      return Object.assign({}, state, { msgNotifications: [] });

    case MESSAGE_RECEIVED:
      return Object.assign({}, state, { message: action.payload });
    default:
      return state;
  }
}

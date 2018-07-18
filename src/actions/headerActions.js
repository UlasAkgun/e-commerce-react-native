import 'whatwg-fetch';
import { endpoint } from './config';
import {
  HEADER_MENUITEM_CHANGED,
  MESSAGE_RECEIVED,
} from '../constants/actionTypes';

export function headerMenuItemChange(activeMenuItem) {
  return {
    type: HEADER_MENUITEM_CHANGED,
    payload: activeMenuItem,
  };
}
export function messageReceived(msgText) {
  return {
    type: MESSAGE_RECEIVED,
    payload: msgText,
  };
}

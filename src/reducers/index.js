import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import iBuy from './iBuyReducer';
import category from './categoryReducer';
import auth from './authReducer';
import header from './headerReducer';
import userProfile from './profileReducer';
import listing from './listingReducer';
import userInventory from './inventoryReducer';
import applicationState from './applicationStateReducer';

export default combineReducers({
  user,
  runtime,
  iBuy,
  category,
  auth,
  header,
  userProfile,
  listing,
  userInventory,
  applicationState
});

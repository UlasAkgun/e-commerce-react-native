import {UPDATE_APPLICATION_LOADING_STATE} from '../constants/actionTypes';

export default (state = {isLoading: false}, action) =>
{
    switch (action.type)
    {
        case UPDATE_APPLICATION_LOADING_STATE:
            return Object.assign({}, state, { isLoading: action.payload});
        default:
            return state;
    }
}

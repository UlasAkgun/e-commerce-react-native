import {UPDATE_APPLICATION_LOADING_STATE} from '../constants/actionTypes';

export const updateLoadingState = (isLoading) =>
{
    return (dispatch) =>
    {
        dispatch({
            type: UPDATE_APPLICATION_LOADING_STATE,
            payload: isLoading
        });
    }
};
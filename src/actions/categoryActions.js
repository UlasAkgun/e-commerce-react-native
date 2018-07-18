import 'whatwg-fetch';
import { endpoint } from './config';
import {
  BRAND_FETCHED,
  CATEGORY_RESET,
  CAT_DETAIL_FETCHED,
  CAT_CHILDREN_FETCHED,
  BINDED_CAT_FETCHED,
  PRIMARY_CAT_FETCHED,
  SECONDARY_CAT_FETCHED,
  CAT_SELECT_LIST_FETCHED,
  REMOVE_LAST_CAT_FROM_LIST,
  DETAILED_CAT_FETCHED,
  BRAND_DATA_FETCHED,
} from '../constants';

export function getCatetoryChildren(parentId, type = 'catChildrenFetched') {
  return function (dispatch) {
    const endPoint = `${endpoint}primaryCategories/getChildrenOfPrimaryCat?parentId=${parentId}`;

    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        if (type === 'catChildrenFetched') {
          dispatch({
            type: CAT_CHILDREN_FETCHED,
            payload: json,
          });
          if (parentId === 0) {
            dispatch({ type: 'PRIMARY_CAT_FETCHED', payload: null });
          }
        } else if (type === 'SelectCat') {
          dispatch({
            type: CAT_SELECT_LIST_FETCHED,
            payload: json,
          });
          if (parentId === 0) {
            dispatch({ type: 'CURRENT_SELECTED_CAT_FETCHED', payload: null });
          }
        }
      })
      .catch((err) => {
        console.log('parsing failed', err);
      });
  };
}

export function getCategoryDetails(catId) {
  return function (dispatch) {
    const endPoint = `${endpoint}categoryDetails/${catId}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: CAT_DETAIL_FETCHED,
          payload: json,
        });
      })
      .catch((ex) => {
        console.log('parsing failed', ex);
      });
  };
}

export function removeLastCategoryFromList() {
  return function (dispatch) {
    dispatch({
      type: REMOVE_LAST_CAT_FROM_LIST,
    });
  };
}

export function getBrand(id, wishId, itemId, optionId) {
  return function (dispatch, getState) {
    console.log(getState());
    const endPoint = `${endpoint}categories/${id}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        if (wishId) {
          fetch(`${endpoint}brands/getbranddetails/${wishId}/${itemId}/${optionId}`, { method: 'GET' })
            .then(data => data.json())
            .then((brandData) => {
              if (brandData.status && brandData.status.length > 0) {
                dispatch({
                  type: BRAND_DATA_FETCHED,
                  payload: brandData,
                });
              }
            });
        }
        dispatch({
          type: BRAND_FETCHED,
          payload: json,
        });
      })
      .catch((err) => {
        console.log('parsing failedss', err);
      });
  };
}

export function getDetailedCategory(id) {
  return function (dispatch) {
    const endPoint = `${endpoint}categories/${id}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: DETAILED_CAT_FETCHED,
          payload: json,
        });
      })
      .catch((err) => {
        console.log('parsing failedss', err);
      });
  };
}

export function getSecondaryCategory(id) {
  return function (dispatch) {
    const endPoint = `${endpoint}categories/${id}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: SECONDARY_CAT_FETCHED,
          payload: json,
        });
        // //  ;
      })
      .catch((err) => {
        console.log('adsşflsjfkjsdflkgjdsşfhklgşlkdhfşlk', id);
        console.log('parsing failedss', err);
      });
  };
}
export function getBindedCategory(id) {
  return function (dispatch) {
    const endPoint = `${endpoint}categories/${id}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        dispatch({
          type: BINDED_CAT_FETCHED,
          payload: json,
        });
        // //  ;
      })
      .catch((err) => {
        console.log('parsing failed', err);
      });
  };
}

export function getCategory(id) {
  return function (dispatch) {
    const endPoint = `${endpoint}primaryCategories/${id}`;
    fetch(endPoint)
      .then(response => response.json())
      .then((json) => {
        dispatch(getCatetoryChildren(id));
        return json;
      })
      .then((json) => {
        dispatch({
          type: PRIMARY_CAT_FETCHED,
          payload: json,
        });
      })
      .catch((err) => {
        console.log('parsing failed getCategory', err);
      });
  };
}

export function catReset() {
  // //  ;
  return function (dispatch) {
    dispatch({
      type: CATEGORY_RESET,
    });
    // dispatch({
    //   type: AD_RESET,
    // });
  };
}

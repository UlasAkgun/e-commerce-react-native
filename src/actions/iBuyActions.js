import 'whatwg-fetch';
import {isEmpty} from 'lodash';

import {endpoint} from './config';
import {
    UPDATE_AD_ON_CACHE,
    GET_USER_WISHLIST,
    CLEAR_CACHED_AD
} from '../constants/actionTypes';

import {ApiRequestMethod} from '../constants/enumerations';
import AdModel from '../models/ad.model';

export const getUserWishlistByUserIdAndStatus = (status) =>
{
    const endPoint = `${endpoint}wishes/getUserWishes/HujKoEKqx4au4PbwpMIBykAVnEG3/${status}`;
    return (dispatch) =>
    {
        fetch(endPoint)
            .then(response => response.json())
            .then((json) =>
            {
                const data = {
                    wishes: json.wishes,
                    status,
                };

                dispatch({
                    type: GET_USER_WISHLIST,
                    payload: data,
                });
            })
            .catch((ex) =>
            {
                console.log('parsing failed', ex);
            });
    };
};

export const updateAdOnCache = (ad) =>
{
    if (isEmpty(ad))
        ad = new AdModel();

    return (dispatch) =>
    {
        dispatch({
            type: UPDATE_AD_ON_CACHE,
            payload: ad
        });
    }
};

export const iBuyCreateOrUpdateWish = (ad) =>
{
    let endPoint = `${endpoint}wishes`;
    let method = ApiRequestMethod.Post;

    if (ad.id)
    {
        endPoint = `${endpoint}wishes/${ad.id}`;
        method = ApiRequestMethod.Put;
    }

    return (dispatch) =>
    {
        fetch(endPoint, {
            method: method,
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ad),
        })
            .then(response => response.json())
            .then((json) =>
            {
                if (Object.keys(json).indexOf('error') > -1)
                {
                    // TODO: Display error on information modal
                }
                else
                {
                    dispatch({
                        type: UPDATE_AD_ON_CACHE,
                        payload: json,
                    });
                }
            })
            .catch((ex) =>
            {
                console.log('parsing failed', ex);
            });
    };
};

export const deleteWish = (id) =>
{
    const endPoint = `${endpoint}wishes/${id}`;

    return (dispatch) =>
    {
        fetch(endPoint, {
            method: ApiRequestMethod.Delete,
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then((json) =>
            {
                dispatch({
                    type: CLEAR_CACHED_AD,
                });
            })
            .catch((error) =>
            {

                console.log('parsing failed', error);
            });
    };
};

// Helper Functions

// export function iBuyChangeStep(step) {
//   return {
//     type: IBUY_STEP_CHANGE,
//     payload: step,
//   };
// }
// export function iBuyCacheAd(ad) {
//   return function (dispatch) {
//     dispatch({
//       type: IBUY_CACHE_AD,
//       payload: ad,
//     });
//   };
// }
//
// export function saveAttribute(attr) {
//   return {
//     type: SAVE_ATTRIBUTE,
//     payload: attr,
//   };
// }
// export function clearCachedAd() {
//   return function (dispatch) {
//     dispatch({
//       type: CLEAR_CACHED_AD,
//     });
//   };
// }
// export function deleteWish(id) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}wishes/${id}`;
//     fetch(endPoint, {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json, text/plain, */*',
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then((json) => {
//         dispatch({
//           type: CLEAR_CACHED_AD,
//         });
//       })
//       .catch((error) => {
//
//         console.log('parsing failed', error);
//       });
//   };
// }
// export function getDetails(id) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}categoryDetails/${id}`;
//     fetch(endPoint)
//       .then(response => response.json())
//       .then((json) => {
//         dispatch({
//           type: CAT_DETAIL_FETCHED,
//           payload: json,
//         });
//       })
//       .catch((ex) => {
//         console.log('parsing failed', ex);
//       });
//   };
// }
// export function getUserWishes(uid, status) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}wishes/getUserWishes/${uid}/${status}`;
//     fetch(endPoint)
//       .then(response => response.json())
//       .then((json) => {
//         const data = {
//           wishes: json.wishes,
//           status,
//         };
//         dispatch({
//           type: USER_WISHLIST_FETCHED,
//           payload: data,
//         });
//       })
//       .catch((ex) => {
//         console.log('parsing failed', ex);
//       });
//   };
// }
// export function publishWish(userId, wishId, status) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}wishes/publishWish/${userId}/${wishId}/${status}`;
//     fetch(endPoint, {method: 'POST'})
//       .then(response => response.json())
//       .then((json) => {
//         dispatch({
//           type: WISH_PUBLISHED,
//           payload: json.status,
//         });
//       })
//       .catch((ex) => {
//         console.log('parsing failed', ex);
//       });
//   };
// }
// export function getBrandDetails(id) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}categoryDetails/findOne?filter[where][parentId]=${id}`;
//     fetch(endPoint)
//       .then(response => response.json())
//       .then((json) => {
//         const details = Object.assign({}, json, { id });
//         dispatch({
//           type: CAT_DETAIL_FETCHED,
//           payload: details,
//         });
//       })
//       .catch((ex) => {
//         console.log('parsing failed', ex);
//       });
//   };
// }
// export function iBuyCreateWish(userId, title, description, status) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}wishes`;
//     fetch(endPoint, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json, text/plain, */*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ userId, title, description, status, step: 1 }),
//     })
//       .then(response => response.json())
//       .then((json) => {
//         if (Object.keys(json).indexOf('error') > -1) {
//           //error
//         } else {
//           history.push(`/ibuy/step2/${json.id}`);
//           dispatch({
//             type: IBUY_CACHE_AD,
//             payload: json,
//           });
//         }
//       })
//       .catch((ex) => {
//         console.log('parsing failed', ex);
//       });
//   };
// }
// export function saveBrandDetail(saveObj, wishId, brandDetailId) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}wishes`;
//
//     if (brandDetailId) {
//       fetch(`${endPoint}/${wishId}/brands/${brandDetailId}`, {
//         method: 'PUT',
//         headers: {
//           Accept: 'application/json, text/plain, */*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(saveObj),
//       })
//         .then(response => response.json())
//         .then((json) => {
//           dispatch({
//             type: BRAND_DATA_FETCHED,
//             payload: {},
//           });
//         });
//     } else {
//       fetch(`${endPoint}/${wishId}/brands`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json, text/plain, */*',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(saveObj),
//       })
//         .then(response => response.json())
//         .then((json) => {
//           dispatch({
//             type: BRAND_DATA_FETCHED,
//             payload: {},
//           });
//         });
//     }
//     console.log('brand details saved');
//   }
// }
// export function iBuyUpdateWish(adId, adObject, next) {
//   return function (dispatch) {
//     const endPoint = `${endpoint}wishes/${adId}`;
//     fetch(endPoint, {
//       method: 'PATCH',
//       headers: {
//         Accept: 'application/json, text/plain, */*',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(adObject),
//     })
//       .then(response => response.json())
//       .then((json) => {
//         console.log(json);
//         if (Object.keys(json).indexOf('error') > -1) {
//           //error
//         } else {
//           if (next) {
//             history.push(next);
//           };
//           dispatch({
//             type: IBUY_CACHE_AD,
//             payload: json,
//           });
//         }
//       })
//       .catch((ex) => {
//         console.log('parsing failed', ex);
//       });
//   };
// }

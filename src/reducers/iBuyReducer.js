import {difference} from 'lodash';

import {
    UPDATE_AD_ON_CACHE,
    GET_USER_WISHLIST,
    CLEAR_CACHED_AD
} from '../constants/actionTypes';

import {AdStatus} from '../constants/enumerations';
import AdModel from '../models/ad.model';


const initialState = {
    cachedAd: new AdModel(),
    wishList: [],
    publishedWishes: []
};
export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case UPDATE_AD_ON_CACHE:
            return Object.assign({}, state, { cachedAd: { ...state.cachedAd, ...action.payload } });

        case GET_USER_WISHLIST:
            if (action.payload.status === AdStatus.wishList)
                return Object.assign({}, state, { wishList: [...action.payload.wishes] });
            return Object.assign({}, state, { publishedWishes: [...action.payload.wishes] });

        case CLEAR_CACHED_AD:
            return Object.assign({}, state, { cachedAd: {} });

        default:
            return state;
    }
}

// const initialState = { step: 0, cachedAd: {}, wishList: [], publishedWishes: [], details: [] };
// export default function iBuy(state = initialState, action) {
//   switch (action.type) {
//     case IBUY_STEP_CHANGE:
//       return Object.assign({}, state, { step: action.payload });
//     case CLEAR_CACHED_AD:
//       return initialState;
//     case WISH_PUBLISHED: {
//       const copyState = Object.assign({}, state);// TODO: burada kaldım
//       copyState.cachedAd.status = action.payload;
//       return copyState;
//     }
//     case SAVE_ATTRIBUTE: {
//       const cachedAd = Object.assign({}, state.cachedAd);
//       if (state.cachedAd.attributes) {
//         if (state.cachedAd.attributes.indexOf(action.payload) < 0) {
//           cachedAd.attributes = state.cachedAd.attributes.concat([action.payload]);
//           return Object.assign({}, state, { cachedAd });
//         }
//         cachedAd.attributes = difference(state.cachedAd.attributes, [action.payload]);
//         return Object.assign({}, state, { cachedAd });
//       }
//       cachedAd.attributes = [action.payload];
//       return Object.assign({}, state, { cachedAd });
//     }
//     case IBUY_CACHE_AD:
//       return Object.assign({}, state, {
//         cachedAd: { ...state.cachedAd, ...action.payload },
//       });
//     case USER_WISHLIST_FETCHED:
//     if (action.payload.status === 'wishlist') {
//       return Object.assign({}, state, {
//         wishList: [...action.payload.wishes],
//       });
//     } else if (action.payload.status === 'published') {
//       return Object.assign({}, state, {
//         publishedWishes: [...action.payload.wishes],
//       });
//     }
//
//     case BRAND_DATA_FETCHED:
//       {
//         let brandData;
//         if (action.payload.status) {
//           brandData = action.payload.status[0];
//         } else {
//           brandData = action.payload;
//         }
//         return Object.assign({}, state, {
//           cachedAd: { ...state.cachedAd, brandData },
//           details: state.details,
//         });
//       }
//     case CAT_DETAIL_FETCHED: {
//       let newDetails = [];
//       if (state.details && state.details.length > 0) {
//         newDetails = state.details.map((item) => {
//           if (item.id === action.payload.id) {
//             return action.payload;
//           }
//           return item;
//         });
//       }
//       newDetails = [action.payload];
//
//       return Object.assign({}, state, { details: newDetails });
//     }
//     case AD_FETCHED:
//       return Object.assign({}, state, { cachedAd: action.payload });
//     case USER_LOGOUT:
//       return Object.assign({}, { step: 0, cachedAd: {}, wishList: [], details: [] });
//     default:
//       return state;
//   }
// }

import { REHYDRATE } from 'redux-persist';
import {
  CATEGORY_RESET,
  CAT_SELECT_COMPLETE,
  CAT_SEARCH_FETCHED,
  PRIMARY_CAT_FETCHED,
  CAT_CHILDREN_FETCHED,
  BRAND_FETCHED,
  DETAILED_CAT_FETCHED,
  SECONDARY_CAT_FETCHED,
} from '../constants/actionTypes';

export default function (
  state = {
    secondaryCat: {},
    currentCatList: [],
    primaryCat: {},
    catDetails: {},
    catChildren: {},
    catList: [],
    catSearchList: [],
    detailedCat: {},
    brand: {},
  },
  action,
) {
  switch (action.type) {
    case SECONDARY_CAT_FETCHED: {
      const newCat = action.payload;
      let newCatList = [];

      if (state.catList.length === 0) {
        newCatList = [newCat];
      } else {
        if (
          state.catList[0].id === newCat.parentId && state.catList.length > 1
        ) {
          state.catList = [state.catList[0]];
        }

        if (state.catList.length > 0) {
          let testItem;
          do {
            //
            testItem = state.catList.pop();
            if (!testItem) {
              testItem = {
                id: newCat.parentId,
              };
            }
          } while (testItem.id !== newCat.parentId);
          newCatList = state.catList.concat([testItem, newCat]);
        } else {
          newCatList = [].concat([newCat]);
        }
      }

      return Object.assign({}, state, {
        secondaryCat: action.payload,
        catList: newCatList.concat([]),
      });
    }
    case PRIMARY_CAT_FETCHED: {
      const markedAsFetched = Object.assign({}, action.payload, {
        type: 'fetched',
      });
      const markedAsSame = Object.assign({}, state.detailedCat, {
        type: 'same',
      });
      return Object.assign({}, state, { primaryCat: markedAsFetched, detailedCat: markedAsSame });
    }

    case DETAILED_CAT_FETCHED: {
      const markedAsFetched = Object.assign({}, action.payload, {
        type: 'fetched',
      });
      const markedAsSame = Object.assign({}, state.primaryCat, {
        type: 'same',
      });
      return Object.assign({}, state, { detailedCat: markedAsFetched, primaryCat: markedAsSame });
    }
    case BRAND_FETCHED:
      return Object.assign({}, state, { brand: action.payload });

    case CAT_SELECT_COMPLETE:
      return Object.assign({}, state, { catList: [] });

    case CAT_SEARCH_FETCHED:
      return Object.assign({}, state, { catSearchList: action.payload });

    case CAT_CHILDREN_FETCHED:
      return Object.assign({}, state, { catChildren: action.payload });

    case CATEGORY_RESET:
      // return Object.assign({}, state, { catList: [], secondaryCat: {} });
      return Object.assign({}, state, { primaryCat: {}, detailedCat: {} });
    // case REMOVE_LAST_CAT_FROM_LIST:
    //   const newList = state.catList.slice(0, state.catList.length - 1);
    //   return Object.assign({}, state, { catList: newList });
    case REHYDRATE:
      {
        const incoming = action.payload.category;
        if (incoming) return { ...state, ...incoming };
        return state;
      }

    default:
      return state;
  }
}

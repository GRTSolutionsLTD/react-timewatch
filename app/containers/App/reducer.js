/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import * as actionTypes from './constants';
import * as data from '../../data/reports.json';
// The initial state of the App
export const initialState = {
  reportsList: data.default,
};

/* eslint-disable default-case, no-param-reassign */

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_REPORTS:
      return { ...state };
    case actionTypes.UPDATE_TODAYS_REGISTRATION:
      return state.reportsList
        ? state.reportsList.filter(r => r.enter.startsWith('a'))
        : state.filter(r => r.enter.startsWith('a'));
    default:
      return state;
  }
}

export default appReducer;

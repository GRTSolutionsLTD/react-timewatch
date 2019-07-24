import produce from 'immer';
import { UPDATE_TODAYS_REGISTRATION } from './constants';
import * as data from '../../data/reports.json';

export const initialState = {
  reportsList: data.default,
};
/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case UPDATE_TODAYS_REGISTRATION:
        draft.reportsList = [action.updateRecord]
        break;
    }
  });

export default appReducer;

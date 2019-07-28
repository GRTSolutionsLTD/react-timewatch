import * as actionTypes from './constants';
// The initial state of the App
export const initialState = {
  loading: true,
  reportsList: [],
  error: null,
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_REPORTS:
      return { ...state, reportsList: [], loading: true };
    case actionTypes.GET_REPORTS_SUCCESS:
      return { ...state, reportsList: action.response, loading: false };
    case actionTypes.UPDATE_TODAYS_REGISTRATION:
      return {
        ...state,
        reportsList: [action.addRecord(state.reportsList)],
      };
    default:
      return state;
  }
}

export default appReducer;

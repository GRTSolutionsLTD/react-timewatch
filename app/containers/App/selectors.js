import { createSelector } from 'reselect';
import { filter } from 'lodash';
import moment from 'moment';
import { initialState } from './reducer';
const selectGlobal = state => state.global || initialState;

const makeSelectGetList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.reportsList,
  );

const makeSelectGetTodaysReports = state =>
  createSelector(
    selectGlobal,
    filter(state.reportsList, { date: moment().format('M/DD/YYYY') }),
  );

export { selectGlobal, makeSelectGetList, makeSelectGetTodaysReports };

import { createSelector } from 'reselect';
import { find } from 'lodash';
import moment from 'moment';
import { initialState } from './reducer';

const selectGlobal = state => initialState || state.global;

const makeSelectGetList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.reportsList,
  );

const makeSelectGetTodaysReports = () =>
  createSelector(
    selectGlobal,
    globalState =>
      find(globalState.reportsList, { date: moment().format('M/DD/YYYY') }),
  );

export { selectGlobal, makeSelectGetList, makeSelectGetTodaysReports };

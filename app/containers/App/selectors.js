import { createSelector } from 'reselect';
import { find } from 'lodash';
import moment from 'moment';
import { initialState } from './reducer';
import { DATE_FORMAT } from './constants';

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
      find(globalState.reportsList, { date: moment().format(DATE_FORMAT) }),
  );

export { selectGlobal, makeSelectGetList, makeSelectGetTodaysReports };

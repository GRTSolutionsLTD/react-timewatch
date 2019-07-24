import { createSelector } from 'reselect';
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
    // todo change the func to retun todays record
    globalState => globalState.reportsList.filter(r => r.enter.startsWith('r')),
  );

export { selectGlobal, makeSelectGetList, makeSelectGetTodaysReports };

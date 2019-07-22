import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reportsPage state domain
 */

const selectReportsPageDomain = state => state.reportsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ReportsPage
 */

const makeSelectReportsPage = () =>
  createSelector(
    selectReportsPageDomain,
    substate => substate,
  );

export default makeSelectReportsPage;
export { selectReportsPageDomain };

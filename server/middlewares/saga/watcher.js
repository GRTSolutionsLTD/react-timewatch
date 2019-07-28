import { takeLatest, put } from 'redux-saga/effects';
import * as actions from '../../../app/containers/App/constants';

function* getReportsAsync() {
  const response = yield fetch('http://localhost:3000/api/reports/list').then(
    res => res.json(),
  );
  yield put({ type: actions.GET_REPORTS_SUCCESS, response });
}
export const templatesSaga = [takeLatest(actions.GET_REPORTS, getReportsAsync)];

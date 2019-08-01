import { takeLatest, put } from 'redux-saga/effects';
import * as actions from '../../../app/containers/App/constants';

function* getReportsAsync() {
  const response = yield fetch('http://localhost:3000/api/reports/list').then(
    res => res.json(),
  );
  yield put({ type: actions.GET_REPORTS_SUCCESS, response });
}

function* updateRecord() {
  const response = yield fetch('http://localhost:3000/api/reports/update').then(
    res => res.text(),
  );
  yield put({ type: actions.SET_TODAYS_REGISTRATION_SECCUSS, response });
}

function* addRecord() {
  const response = yield fetch('http://localhost:3000/api/reports/add').then(
    res => res.text(),
  );
  yield put({ type: actions.SET_TODAYS_REGISTRATION_SECCUSS, response });
}

export const templatesSaga = [
  takeLatest(actions.GET_REPORTS, getReportsAsync),
  takeLatest(actions.UPDATE_TODAYS_REGISTRATION, updateRecord),
  takeLatest(actions.SET_TODAYS_REGISTRATION, addRecord),
];

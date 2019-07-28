import { all } from 'redux-saga/effects';
import { templatesSaga } from './watcher';
export default function* rootSaga() {
  yield all([...templatesSaga]);
}

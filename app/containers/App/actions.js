import {
  UPDATE_TODAYS_REGISTRATION,
  GET_REPORTS,
  SET_TODAYS_REGISTRATION,
} from './constants';

export function UpdateTodaysRegistrarion(event) {
  if (event === 'exit') return { type: UPDATE_TODAYS_REGISTRATION };
  return { type: SET_TODAYS_REGISTRATION };
}

export function getReports() {
  return { type: GET_REPORTS };
}

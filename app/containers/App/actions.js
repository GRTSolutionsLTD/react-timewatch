import { find } from 'lodash';
import moment from 'moment';
import { UPDATE_TODAYS_REGISTRATION } from './constants';

export function UpdateTodaysRegistrarion() {
  return { type: UPDATE_TODAYS_REGISTRATION, updateRecord };
}

const updateRecord = reportsList => {
  find(reportsList, {
    date: moment().format('M/DD/YYYY'),
  }).leave = moment().format('M/DD/YYYY');
};

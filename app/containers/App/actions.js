// import { find, push } from 'lodash';
import { push } from 'lodash';
import { moment } from 'moment';
import { UPDATE_TODAYS_REGISTRATION, GET_REPORTS } from './constants';

export function UpdateTodaysRegistrarion() {
  return { type: UPDATE_TODAYS_REGISTRATION, addRecord };
}

export function getReports() {
  return { type: GET_REPORTS };
}
// const updateRecord = reportsList => {
//   find(reportsList, {
//     date: moment().format('M/DD/YYYY'),
//     leave: '',
//   }).leave = moment().format('M/DD/YYYY');
// };
const addRecord = reportsList => {
  push(reportsList, {
    enter: new Date(),
    leave: '',
    date: moment().format('M/DD/YYYY'),
  });
};

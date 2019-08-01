/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_REPORTS = 'GET_REPORTS';
export const GET_REPORTS_SUCCESS = 'GET_REPORTS_SUCCESS';
export const GET_REPORTS_FAIL = 'GET_REPORTS_FAIL';
export const UPDATE_TODAYS_REGISTRATION = 'UPDATE_TODAYS_REGISTRATION';
export const UPDATE_TODAYS_REGISTRATION_SUCCESS =
  'UPDATE_TODAYS_REGISTRATION_SUCCESS';
export const UPDATE_TODAYS_REGISTRATION_FAIL =
  'UPDATE_TODAYS_REGISTRATION_SUCCESS';
export const DATE_FORMAT = 'M/DD/YYYY';
export const SET_TODAYS_REGISTRATION = 'SET_TODAYS_REGISTRATION';
export const SET_TODAYS_REGISTRATION_SECCUSS =
  'SET_TODAYS_REGISTRATION_SECCUSS';

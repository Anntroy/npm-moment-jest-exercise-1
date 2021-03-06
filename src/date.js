var moment = require('moment');

/**
 * TODO: all getters, all get method must return a value
 * */

function getFullDate() {
  // return moment().format('MMMM Do YYYY, h:mm:ss a');
}

function getWeekDay() {
  // TODO implement
  return moment().weekday();
}

function getCurrentMonth() {
  // TODO implement
  return moment().month();
}

function getCurrentYear() {
  return moment().year();
}

module.exports = {
  getFullDate: getFullDate,
  getCurrentDay: getWeekDay,
  getCurrentMonth: getCurrentMonth,
  getCurrentYear: getCurrentYear,
};

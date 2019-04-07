let msInDay = 24 * 60 * 60 * 1000;
let msInMonth = 30 * 24 * 60 * 60 * 1000;
let msInYear = 365 * 24 * 60 * 60 * 1000;

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getYearsAgo(date, from = new Date()) {
  return Math.floor((from.getTime() - date.getTime()) / msInYear);
}

export function getMonthsAgo(date, from = new Date()) {
  return Math.floor((from.getTime() - date.getTime()) / msInMonth);
}

export function getDaysAgo(date, from = new Date()) {
  return Math.floor((from.getTime() - date.getTime()) / msInDay);
}

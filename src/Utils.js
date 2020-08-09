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

export function getNumberOfMonths(date) {
  return Math.floor(date.getTime() / msInMonth);
}

export function getYearsFromTotalMonths(months) {
  return Math.floor(months / 12);
}

export function getRemainderMonthsFromTotalMonths(months) {
  return months - getYearsFromTotalMonths(months) * 12;
}

export const displayYearMonthText = (yearValue, monthValue) => {
  const yearsPart = yearValue === 0 ? `` : yearValue === 1 ? `${yearValue} year` : `${yearValue} years`;
  const monthsPart = monthValue === 0 ? `` : monthValue === 1 ? `${monthValue} month` : `${monthValue} months`;
  const connector = yearsPart && monthsPart ? " and " : "";
  return `${yearsPart}${connector}${monthsPart}`;
};

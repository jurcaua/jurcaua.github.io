import { getNumberOfMonths } from "./Utils";

export const EMAIL = "jurcaua@gmail.com";
export const BIRTHDAY = new Date(1997, 7, 25); // why are months.... 0 - 11.....
export const JAPANESE_STARTED_LEARNING = new Date(2017, 6, 21);
export const JLPT_LEVEL_CURRENTLY_HAVE = 1;
export const UBISOFT_STARTED_WORKING = new Date(2018, 4, 1);
export const UBISOFT_DIDNT_WORK_MONTHS = 9;

export const UBISOFT_WORKED_MONTHS =
  getNumberOfMonths(new Date(new Date() - UBISOFT_STARTED_WORKING)) - UBISOFT_DIDNT_WORK_MONTHS;

export const ATG_STARTED_WORKING = new Date(2020, 11, 7);

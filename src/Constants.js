import { getLanguage } from "./Localization";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "jp"];

export const SMALL_WIDTH_THRESHOLD_GRID = 600;
export const SMALL_WIDTH_THRESHOLD_MARGINS = 960;

export const ME_TAB_SLUG = "me";
export const PROJECTS_TAB_SLUG = "projects";
export const INTERESTS_TAB_SLUG = "interests";
export const DEFAULT_TAB_SLUG = ME_TAB_SLUG;

// supply a "disabled: true" key to disable a tab
// "disabled: true"の場合に、無効にしてある
export const MAIN_TABS = {
  [ME_TAB_SLUG]: {
    path: "",
    icon: "face",
  },
  [PROJECTS_TAB_SLUG]: {
    path: "projects",
    icon: "laptop_mac",
  },
  [INTERESTS_TAB_SLUG]: {
    path: "interests",
    icon: "favorite_border",
  },
};

export const GetRootTabRouterPath = tab => {
  if (tab === "me") {
    return `/:lang`;
  }
  return `/:lang/${MAIN_TABS[tab].path}`;
};

export const GetRootTabLinkToPath = tab => {
  const currentLang = getLanguage();
  if (tab === "me") {
    return `/${currentLang}`;
  }
  return `/${getLanguage()}/${MAIN_TABS[tab].path}`;
};

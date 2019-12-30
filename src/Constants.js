import { getLanguage } from "./Localization";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "jp"];

export const SMALL_WIDTH_THRESHOLD_GRID = 600;
export const SMALL_WIDTH_THRESHOLD_MARGINS = 800;

// supply a "disabled: true" key to disable a tab
// "disabled: true"の場合に、無効にしてある
export const RootTab = {
  me: {
    path: "",
    icon: "face"
  },
  projects: {
    path: "projects",
    icon: "laptop_mac"
  },
  interests: {
    path: "interests",
    icon: "favorite_border"
  }
};

export const GetRootTabRouterPath = tab => {
  if (tab === "me") {
    return `/:lang`;
  }
  return `/:lang/${RootTab[tab].path}`;
};

export const GetRootTabLinkToPath = tab => {
  const currentLang = getLanguage();
  if (tab === "me") {
    return `/${currentLang}`;
  }
  return `/${getLanguage()}/${RootTab[tab].path}`;
};

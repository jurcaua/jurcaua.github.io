import { getLanguage } from "./Localization";

export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "jp"];

export const RootTab = {
  me: {
    path: "",
    icon: "face"
  },
  projects: {
    // disabled: true,
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

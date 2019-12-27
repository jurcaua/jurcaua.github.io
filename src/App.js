import React from "react";

// External Package Imports
import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Typography, Tooltip, Button } from "@material-ui/core";
import { Route, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Local Imports
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./Constants";
import { EMAIL } from "./Info";
import { getCurrentYear } from "./Utils";
import { localized, getLanguage, setLanguage } from "./Localization";
import getJapanFlagSVG, { getCanadianFlagSVG } from "./Flags";
import ReadOnlyCopyField from "./ReadOnlyCopyField";
import TabNavigation from "./tabs/TabNavigation";
import TabRouteRendering from "./tabs/TabRouteRendering";

toast.configure();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },

  appBar: {
    marginBottom: "20px"
  },

  title: {
    textAlign: "center",
    marginTop: "10px"
  },

  footer: {
    fontSize: "20px",
    textAlign: "center",
    margin: "10px",
    align: "center"
  },

  svgButton: {
    position: "fixed",
    margin: "5px",
    zIndex: 10,
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

const App = props => {
  const classes = useStyles(props);
  let history = useHistory();
  let location = useLocation();

  const changeLanguage = (language, reset = false) => {
    // early exit
    const currentLanguage = getLanguage();
    console.log("Changing language: ", currentLanguage, "->", language);
    if (currentLanguage === language) {
      return;
    }

    // Set the language for localization module
    setLanguage(language);

    // Replace the language part of the path and push new history
    let splitURL = location.pathname.split("/");
    splitURL[1] = language;
    if (reset) {
      splitURL = splitURL.slice(0, 2);
    }
    const toPush = splitURL.join("/");
    if (location !== splitURL.join("/")) {
      history.push(splitURL.join("/"));
      console.log("Pushed to history:", toPush);
    } else {
      console.log("Skipped redundant history.push:", toPush);
    }
  };

  const getDynamicTitleSize = () => {
    if (getLanguage() === "jp") {
      return {
        fontSize: "40px"
      };
    }
    return {
      fontSize: "50px"
    };
  };

  const getLocalizedName = () => {
    return `${localized().nameFirst}${localized().nameSeperator}${localized().nameLast}`;
  };

  // Only on initialization, will we check the user-entered URL and make sure it is valid
  // - this is mostly for checking the entered language and redirecting otherwise
  useEffect(() => {
    const splitURL = location.pathname.split("/");
    const locationLang = splitURL[1]; // by our own definition we have the language first in the URL path
    if (getLanguage() !== locationLang) {
      // Reset to the main DEFAULT_LANGUAGE if it is not in the list of supported languages
      if (!SUPPORTED_LANGUAGES.find(supportedLang => locationLang === supportedLang)) {
        // Always redirect to english part if unexpected URL.
        // 予想以外のURLがあれば、いつも英語の方にリダイレクトする
        console.log("Changing language, NOT found in SUPPORTED_LANGUAGES -> to default.");
        changeLanguage(DEFAULT_LANGUAGE, true);
      }
      // otherwise, change the language to the one in the URL, keeping the remaining path as well (aka, no reset flag)
      else {
        console.log("Changing language, found in SUPPORTED_LANGUAGES.");
        changeLanguage(locationLang);
      }
    }
  });

  let switchLanguageTo = getLanguage() === "jp" ? "en" : "jp";
  let switchLanguageToFlag = switchLanguageTo === "jp" ? getJapanFlagSVG() : getCanadianFlagSVG();

  return (
    <div className={classes.root}>
      {localized() !== undefined && getLanguage !== undefined && (
        <div>
          <Route
            path="/:lang"
            render={({ location }) => (
              <React.Fragment>
                <AppBar position="static" color="default" className={classes.appBar}>
                  {/* TODO: make a "supported languages" module to reduce this code */}

                  <Tooltip title={`Change the language to ${switchLanguageTo}`}>
                    <div className={classes.svgButton}>
                      <Button
                        onClick={event => {
                          changeLanguage(switchLanguageTo);
                        }}
                      >
                        {switchLanguageToFlag}
                      </Button>
                    </div>
                  </Tooltip>
                  <Typography className={classes.title} style={getDynamicTitleSize()} variant="h2">
                    {getLocalizedName()}
                  </Typography>
                  <ReadOnlyCopyField text={EMAIL} />

                  {/* Controls the navigation of the main tabs. */}
                  <TabNavigation pathname={location.pathname} />
                </AppBar>

                {/* Renders the appropriate main tab according to the current Router path. */}
                {/* パスによって、適切なメインタブを表現するコンポーネント */}
                <TabRouteRendering />

                {/* Footer with basic information. */}
                {/* 基本情報があるフッター */}
                <AppBar position="static" color="default">
                  <Typography className={classes.footer}>
                    © {getCurrentYear()} {getLocalizedName()}
                  </Typography>
                </AppBar>
              </React.Fragment>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default App;

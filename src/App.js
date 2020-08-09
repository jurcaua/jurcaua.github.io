import React from "react";

// External Package Imports
import { useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Typography } from "@material-ui/core";
import { Route, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Local Imports
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./Constants";
import { EMAIL } from "./Info";
import { getCurrentYear } from "./Utils";
import { localized, getLanguage, setLanguage } from "./Localization";
import ReadOnlyCopyField from "./ReadOnlyCopyField";
import TabNavigation from "./tabs/TabNavigation";
import TabRouteRendering from "./tabs/TabRouteRendering";
import LanguageSwitcher from "./LanguageSwitcher";

toast.configure();

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },

  appBar: {
    marginBottom: "20px",
  },

  title: {
    textAlign: "center",
    marginTop: "10px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },

  footer: {
    textAlign: "center",
    margin: "10px",
    align: "center",
  },
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

  // Japanese font is much larger than the English, so let's make sure it fits on all screens this way
  const getTitleVariant = () => {
    return getLanguage() === "en" ? "h2" : "h3";
  };

  return (
    <div className={classes.root}>
      {localized() !== undefined && getLanguage !== undefined && (
        <div>
          <Route
            path="/:lang"
            render={({ location }) => (
              <React.Fragment>
                <AppBar position="static" color="default" className={classes.appBar}>
                  <Typography className={classes.title} variant={getTitleVariant()}>
                    {getLocalizedName()}
                  </Typography>
                  <ReadOnlyCopyField text={EMAIL} />

                  {/* Controls the navigation of the main tabs. */}
                  <TabNavigation pathname={location.pathname} />
                </AppBar>

                {/* Renders the appropriate main tab according to the current Router path. */}
                {/* パスによって、適切なメインタブを表現するコンポーネント */}
                <TabRouteRendering />

                {/* Displays the fixed position button that changes the language on click. */}
                {/* fixedポジションの言語を変わられるボタンの要素 */}
                <LanguageSwitcher onClick={changeLanguage} />

                {/* Footer with basic information. */}
                {/* 基本情報があるフッター */}
                <AppBar position="static" color="default">
                  <Typography className={classes.footer} variant="h6">
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

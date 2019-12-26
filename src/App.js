import React from "react";

// External Package Imports
import { makeStyles } from "@material-ui/styles";
import { AppBar, Typography, Tooltip, Button } from "@material-ui/core";
import { Route, Redirect, useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Local Imports
import { EMAIL } from "./Info";
import { getCurrentYear } from "./Utils";
import { localized, getLanguage, setLanguage } from "./Localization";
import getJapanFlagSVG, { getCanadianFlagSVG } from "./Flags";
import ReadOnlyCopyField from "./ReadOnlyCopyField";
import TabNavigation from "./tabs/TabNavigation";
import TabRouteRendering from "./tabs/TabRouteRendering";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./Constants";

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
  // const [, updateState] = React.useState();
  // const forceUpdate = React.useCallback(() => updateState({}), []);

  const changeLanguage = language => {
    setLanguage(language);

    // replace the language part of the path and update
    let splitURL = location.pathname.split("/");
    splitURL[1] = language;
    history.push(splitURL.join("/"));

    // we used to have to force update after changing the internal language variable
    // but the introduction of react-router-dom saves us from this step now
    // forceUpdate();
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

  let switchLanguageTo = getLanguage() === "jp" ? "en" : "jp";
  let switchLanguageToFlag = switchLanguageTo === "jp" ? getJapanFlagSVG() : getCanadianFlagSVG();

  // Reset to default language if we find an unknown language in the URL
  const tryMatchLang = useRouteMatch("/:lang");
  if (tryMatchLang) {
    let paramsLang = tryMatchLang.params.lang;
    if (paramsLang && paramsLang !== getLanguage()) {
      if (!SUPPORTED_LANGUAGES.find(supportedLang => paramsLang === supportedLang)) {
        changeLanguage(DEFAULT_LANGUAGE);
      }
    }
  }

  return (
    <div className={classes.root}>
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
      {/* Always redirect to english part if unexpected URL. */}
      {/* 予想以外のURLがあれば、いつも英語の方にリダイレクトする */}
      <Route>
        <Redirect to="/en" />
      </Route>
    </div>
  );
};

export default App;

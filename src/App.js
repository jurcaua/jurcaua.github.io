import React from "react";

// External Package Imports
import { makeStyles } from "@material-ui/styles";
import { AppBar, Typography, Tooltip, Button } from "@material-ui/core";
import { Route, BrowserRouter } from "react-router-dom";
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
    fontSize: "50px",
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
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const changeLanguage = (event, language) => {
    setLanguage(language);
    forceUpdate();
  };

  let switchLanguageTo = getLanguage() === "jp" ? "en" : "jp";
  let switchLanguageToFlag = switchLanguageTo === "jp" ? getJapanFlagSVG() : getCanadianFlagSVG();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Route
          path="/"
          render={({ location }) => (
            <React.Fragment>
              <AppBar position="static" color="default" className={classes.appBar}>
                {/* TODO: make a "supported languages" module to reduce this code */}

                <Tooltip title={`Change the language to ${switchLanguageTo}`}>
                  <div className={classes.svgButton}>
                    <Button
                      onClick={event => {
                        changeLanguage(event, switchLanguageTo);
                      }}
                    >
                      {switchLanguageToFlag}
                    </Button>
                  </div>
                </Tooltip>
                <Typography className={classes.title} variant="h2">
                  {`${localized().nameFirst}${localized().nameSeperator}${localized().nameLast}`}
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
                  © {getCurrentYear()} Alexander Jurcau
                </Typography>
              </AppBar>
            </React.Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Tooltip, Button } from "@material-ui/core";
import TabMe from "./tabs/me/TabMe";
import ReadOnlyCopyField from "./ReadOnlyCopyField";
import { EMAIL } from "./Info";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import getJapanFlagSVG, { getCanadianFlagSVG } from "./Flags";
import { localized, getLanguage, setLanguage } from "./Localization";
import TabInterests from "./tabs/interests/TabInterests";
import { getCurrentYear } from "./Utils";

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

// This workaround is for this issue: https://github.com/mui-org/material-ui/issues/12597
function CloneProps(props) {
  const { children, ...other } = props;
  return children(other);
}

const App = props => {
  const [currentTab, setCurrentTab] = useState(0);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleChange = (event, value) => {
    setCurrentTab(value);
  };

  const changeLanguage = (event, language) => {
    setLanguage(language);
    forceUpdate();
  };

  const classes = useStyles(props);

  let switchLanguageTo = getLanguage() === "jp" ? "en" : "jp";
  let switchLanguageToFlag = switchLanguageTo === "jp" ? getJapanFlagSVG() : getCanadianFlagSVG();

  return (
    <div className={classes.root}>
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

        {/* TODO: Put icon in the localization module for en (and can be overriden for other lang), 
          then make tabs based on localization strings*/}
        <Tabs value={currentTab} onChange={handleChange} centered>
          <CloneProps>
            {tabProps => (
              <Tooltip title={localized().tabs.me.tooltip} placement="bottom">
                <div>
                  <Tab
                    {...tabProps}
                    label={<span>{localized().tabs.me.label}</span>}
                    icon={<i className="material-icons">face</i>}
                  />
                </div>
              </Tooltip>
            )}
          </CloneProps>
          <CloneProps>
            {tabProps => (
              <Tooltip title={localized().tabs.projects.tooltip} placement="bottom">
                <div>
                  <Tab
                    {...tabProps}
                    disabled
                    label={<span>{localized().tabs.projects.label}</span>}
                    icon={<i className="material-icons">laptop_mac</i>}
                  />
                </div>
              </Tooltip>
            )}
          </CloneProps>
          <CloneProps>
            {tabProps => (
              <Tooltip title={localized().tabs.interests.tooltip} placement="bottom">
                <div>
                  <Tab
                    {...tabProps}
                    label={<span>{localized().tabs.interests.label}</span>}
                    icon={<i className="material-icons">favorite_border</i>}
                  />
                </div>
              </Tooltip>
            )}
          </CloneProps>
        </Tabs>
      </AppBar>
      {currentTab === 0 && <TabMe />}
      {currentTab === 1 && <div />}
      {currentTab === 2 && <TabInterests />}

      <AppBar position="static" color="default">
        <Typography className={classes.footer}>© {getCurrentYear()} Alexander Jurcau</Typography>
      </AppBar>
    </div>
  );
};

export default App;

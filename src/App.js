import React, { Component } from "react";
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
import { strings } from "./Localization";
import TabInterests from "./tabs/interests/TabInterests";
import { getCurrentYear } from "./Utils";

toast.configure();

const styles = {
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
    position: "absolute",
    margin: "5px"
  }
};

// This workaround is for this issue: https://github.com/mui-org/material-ui/issues/12597
function CloneProps(props) {
  const { children, ...other } = props;
  return children(other);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ currentTab: value });
  };

  changeLanguage = (event, language) => {
    strings.setLanguage(language);
    this.setState({}); // force the state to refresh -> localization updates after setting language
  };

  render() {
    const { currentTab } = this.state;

    return (
      <div className={styles.root}>
        <AppBar position="static" color="default" style={styles.appBar}>
          {/* TODO: make a "supported languages" module to reduce this code */}
          {strings.getLanguage() !== "jp" && (
            <div style={styles.svgButton}>
              <Button
                onClick={event => {
                  this.changeLanguage(event, "jp");
                }}
              >
                {getJapanFlagSVG()}
              </Button>
            </div>
          )}
          {strings.getLanguage() !== "en" && (
            <div style={styles.svgButton}>
              <Button
                onClick={event => {
                  this.changeLanguage(event, "en");
                }}
              >
                {getCanadianFlagSVG()}
              </Button>
            </div>
          )}
          <Typography style={styles.title} variant="h2">
            {strings.nameFirst}
            {strings.nameSeperator}
            {strings.nameLast}
          </Typography>
          <ReadOnlyCopyField text={EMAIL} />

          {/* TODO: Put icon in the localization module for en (and can be overriden for other lang), 
          then make tabs based on localization strings*/}
          <Tabs value={currentTab} onChange={this.handleChange} centered>
            <CloneProps>
              {tabProps => (
                <Tooltip title={strings.tabs.me.tooltip} placement="bottom">
                  <div>
                    <Tab
                      {...tabProps}
                      label={<span>{strings.tabs.me.label}</span>}
                      icon={<i className="material-icons">face</i>}
                    />
                  </div>
                </Tooltip>
              )}
            </CloneProps>
            <CloneProps>
              {tabProps => (
                <Tooltip
                  title={strings.tabs.projects.tooltip}
                  placement="bottom"
                >
                  <div>
                    <Tab
                      {...tabProps}
                      disabled
                      label={<span>{strings.tabs.projects.label}</span>}
                      icon={<i className="material-icons">laptop_mac</i>}
                    />
                  </div>
                </Tooltip>
              )}
            </CloneProps>
            <CloneProps>
              {tabProps => (
                <Tooltip
                  title={strings.tabs.interests.tooltip}
                  placement="bottom"
                >
                  <div>
                    <Tab
                      {...tabProps}
                      label={<span>{strings.tabs.interests.label}</span>}
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
          <Typography style={styles.footer}>
            © {getCurrentYear()} Alexander Jurcau
          </Typography>
        </AppBar>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Link as RouterLink } from "react-router-dom";

// External Package Exports
import { Paper, Slide, Typography, Tab, Tabs, makeStyles } from "@material-ui/core";
import Emoji from "../../Emoji";

// Local Imports
import { localized } from "../../Localization";
import { SMALL_WIDTH_THRESHOLD_MARGINS, INTERESTS_TAB_SLUG, GetRootTabLinkToPath } from "../../Constants";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: ({ windowInnerWidth }) => (windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "2vw" : "10vw"),
    marginRight: ({ windowInnerWidth }) => (windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "2vw" : "10vw"),
  },

  interestsRoot: {
    padding: "1%",
    overflow: "hidden",
  },

  centeredText: {
    textAlign: "center",
    align: "center",
  },

  paper: {
    margin: "1% 2%",
    padding: "2%",
  },
}));

const SLIDE_TIMEOUT = 500;
const DEFAULT_INTERESTS_TAB = "japanese";

const TabInterests = ({ match, windowInnerWidth }) => {
  const classes = useStyles({ windowInnerWidth });

  const getInterests = () => {
    return localized().tabs.interests;
  };

  const getCurrentTab = () => {
    const currentTab = match.params.interest;
    return currentTab && getInterests().content[currentTab] ? currentTab : DEFAULT_INTERESTS_TAB;
  };

  const renderInterests = () => {
    return (
      <Paper className={classes.interestsRoot} elevation={2}>
        <Tabs value={getCurrentTab()} centered>
          {Object.keys(getInterests().content).map((interestKey, index) => {
            return (
              <Tab
                key={index}
                label={<span>{getInterests().content[interestKey].summary}</span>}
                icon={<i className="material-icons">{getInterests().content[interestKey].icon}</i>}
                component={RouterLink}
                to={`${GetRootTabLinkToPath(INTERESTS_TAB_SLUG)}/${interestKey}`}
                value={interestKey}
              />
            );
          })}
        </Tabs>
        {Object.keys(getInterests().content).map((interestKey, index) => {
          return (
            <Slide
              key={index}
              direction="left"
              in={getCurrentTab() === interestKey}
              exit={false}
              timeout={SLIDE_TIMEOUT}
              unmountOnExit
            >
              <Paper elevation={2} className={classes.paper}>
                {getInterests().content[interestKey].details}
              </Paper>
            </Slide>
          );
        })}
      </Paper>
    );
  };

  return (
    <div className={classes.root}>
      {/* Header */}
      <Typography className={classes.centeredText} variant="h4">
        {localized().tabs.interests.header}
      </Typography>

      {/* Sub-header */}
      <Typography className={classes.centeredText} variant="h5">
        {localized().tabs.interests.subheader}
        {<Emoji symbol="😄" />}
      </Typography>
      <br />

      {/* Interest Overview */}
      {renderInterests()}
      <br />
    </div>
  );
};

export default TabInterests;

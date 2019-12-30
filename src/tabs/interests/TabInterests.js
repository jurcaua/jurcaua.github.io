import React, { useState } from "react";

// External Package Exports
import { Paper, Slide, Typography, Tab, Tabs, makeStyles } from "@material-ui/core";
import Emoji from "../../Emoji";

// Local Imports
import { localized } from "../../Localization";
import { SMALL_WIDTH_THRESHOLD_MARGINS } from "../../Constants";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "2vw" : "10vw"),
    marginRight: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "2vw" : "10vw")
  },

  interestsRoot: {
    padding: "1%",
    overflow: "hidden"
  },

  centeredText: {
    textAlign: "center",
    align: "center"
  },

  paper: {
    margin: "1% 2%",
    padding: "2%"
  }
}));

const SLIDE_TIMEOUT = 500;

const TabInterests = props => {
  const classes = useStyles(props);

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, value) => {
    setCurrentTab(value);
  };

  const getInterests = () => {
    return localized().tabs.interests;
  };

  const renderInterests = () => {
    return (
      <Paper className={classes.interestsRoot} elevation={2}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          {getInterests().content.map((item, index) => {
            return (
              <Tab
                key={index}
                label={<span>{item.summary}</span>}
                icon={<i className="material-icons">{item.icon}</i>}
              ></Tab>
            );
          })}
        </Tabs>
        {getInterests().content.map((item, index) => {
          return (
            <Slide
              key={index}
              direction="left"
              in={currentTab === index}
              exit={false}
              timeout={SLIDE_TIMEOUT}
              unmountOnExit
            >
              <Paper elevation={2} className={classes.paper}>
                {item.details}
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

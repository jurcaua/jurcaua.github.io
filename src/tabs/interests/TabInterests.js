import React, { useState } from "react";
import { localized } from "../../Localization";
import { Typography, Tab, Tabs } from "@material-ui/core";
import Emoji from "../../Emoji";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

const styles = {
  interestsRoot: {
    padding: "1%",
    overflow: "hidden"
  },

  header: {
    fontSize: "28px",
    textAlign: "center",
    align: "center"
  },

  subheader: {
    fontSize: "22px",
    textAlign: "center",
    align: "center"
  },

  paper: {
    margin: "1% 2%",
    padding: "2%"
  },

  slideTimeout: {
    enter: 500
  }
};

const TabInterests = props => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, value) => {
    setCurrentTab(value);
  };

  const getInterests = () => {
    return localized().tabs.interests;
  };

  const renderInterests = () => {
    return (
      <Paper style={styles.interestsRoot} elevation={2}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          {getInterests().content.map((item, index) => {
            return (
              <Tab
                key={index}
                label={<span>{item.summary}</span>}
                icon={<i className="material-icons">{item.icon}</i>}
              >
              </Tab>
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
              timeout={styles.slideTimeout}
              unmountOnExit
            >
              <Paper elevation={2} style={styles.paper}>
                {item.details}
              </Paper>
            </Slide>
          );
        })}
      </Paper>
    );
  };

  return (
    <div style={styles.root}>
      {/* Header */}
      <Typography style={styles.header}>{localized().tabs.interests.header}</Typography>

      {/* Sub-header */}
      <Typography style={styles.subheader}>
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

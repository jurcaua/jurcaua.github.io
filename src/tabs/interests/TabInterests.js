import React, { useState } from "react";
import { localized } from "../../Localization";
import { Typography, ExpansionPanel, ExpansionPanelSummary } from "@material-ui/core";
import Emoji from "../../Emoji";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

const styles = {
  root: {
    overflowX: "hidden"
  },

  interestsRoot: {
    display: "flex",
    marginLeft: "5%",
    marginRight: "5%"
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

  paragraph: {
    fontSize: "22px"
  },

  drawerSummary: {
    fontSize: "22px",
    marginLeft: "10px"
  },

  paper: {
    zIndex: 1,
    marginLeft: "10%",
    marginRight: "10%",
    width: "90%"
  },

  slideTimeout: {
    enter: 500
  }
};

const TabInterests = props => {
  const [selectedInterest, setSelectedInterest] = useState(null);

  const getInterests = () => {
    return localized().tabs.interests;
  };

  const renderInterests = () => {
    return (
      <div style={styles.interestsRoot}>
        <div>
          {getInterests().content.map((item, index) => {
            return (
              <ExpansionPanel
                key={index}
                expanded={false}
                style={{
                  backgroundColor: selectedInterest === index ? "#eeeeee" : ""
                }}
              >
                <ExpansionPanelSummary key={index} onClick={() => setSelectedInterest(index)}>
                  <i className="material-icons">arrow_right</i>
                  <i className="material-icons">{item.icon}</i>
                  <Typography style={styles.drawerSummary} noWrap>
                    {item.summary}
                  </Typography>
                </ExpansionPanelSummary>
              </ExpansionPanel>
            );
          })}
        </div>
        <div>
          {selectedInterest === null && (
            <Slide direction="left" in={selectedInterest === null} exit={false} timeout={styles.slideTimeout}>
              <Paper elevation={4} style={{ ...styles.paper, width: "100%" }}>
                <div style={{ margin: "10px" }}>
                  <i className="material-icons" style={{ float: "left" }}>
                    arrow_left
                  </i>
                  <i className="material-icons" style={{ float: "left" }}>
                    touch_app
                  </i>
                  <Typography style={styles.paragraph} noWrap>
                    {localized().tabs.interests.hoverPrompt}
                  </Typography>
                </div>
              </Paper>
            </Slide>
          )}
          {getInterests().content.map((item, index) => {
            if (selectedInterest === index) {
              return (
                <Slide
                  key={index}
                  direction="left"
                  in={selectedInterest === index}
                  exit={false}
                  timeout={styles.slideTimeout}
                >
                  <Paper elevation={4} style={styles.paper}>
                    <div style={{ margin: "10px" }}>{item.details}</div>
                  </Paper>
                </Slide>
              );
            }
            return null;
          })}
        </div>
      </div>
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

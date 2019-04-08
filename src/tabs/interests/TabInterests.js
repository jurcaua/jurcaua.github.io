import React, { Component } from "react";
import { localized } from "../../Localization";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary
} from "@material-ui/core";
import Emoji from "../../Emoji";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

const styles = {
  root: {
    marginLeft: "10%",
    marginRight: "10%"
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
    width: "100%"
  },

  slideTimeout: {
    enter: 500
  }
};

class TabInterests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHoverInterest: null
    };
  }

  getInterests = () => {
    return localized().tabs.interests;
  };

  getInterestContent = index => {
    return this.getInterests().content[index];
  };

  handleHoverOverInterest = index => {
    this.setState({ currentHoverInterest: index });
  };

  renderInterests = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          {this.getInterests().content.map((item, index) => {
            return (
              <ExpansionPanel
                key={index}
                expanded={false}
                style={{
                  backgroundColor:
                    this.state.currentHoverInterest === index ? "#eeeeee" : ""
                }}
              >
                <ExpansionPanelSummary
                  key={index}
                  onMouseEnter={this.handleHoverOverInterest.bind(this, index)}
                >
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
          {this.state.currentHoverInterest === null && (
            <Slide
              direction="left"
              in={this.state.currentHoverInterest === null}
              exit={false}
              timeout={styles.slideTimeout}
            >
              <Paper elevation={4} style={styles.paper}>
                <div style={{ margin: "10px" }}>
                  <i className="material-icons" style={{ float: "left" }}>
                    arrow_left
                  </i>
                  <i className="material-icons" style={{ float: "left" }}>
                    touch_app
                  </i>
                  <Typography style={styles.paragraph} noWrap>
                    {" "}
                    Hover over one of my interests!
                  </Typography>
                </div>
              </Paper>
            </Slide>
          )}
          {this.getInterests().content.map((item, index) => {
            if (this.state.currentHoverInterest === index) {
              return (
                <Slide
                  key={index}
                  direction="left"
                  in={this.state.currentHoverInterest === index}
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

  render() {
    return (
      <div style={styles.root}>
        {/* Header */}
        <Typography style={styles.header}>
          {localized().tabs.interests.header}
        </Typography>

        {/* Sub-header */}
        <Typography style={styles.subheader}>
          {localized().tabs.interests.subheader}
          {<Emoji symbol="😄" />}
        </Typography>
        <br />

        {/* Interest Overview */}
        {this.renderInterests()}
        <br />
      </div>
    );
  }
}

export default TabInterests;

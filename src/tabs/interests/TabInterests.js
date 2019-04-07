import React, { Component } from "react";
import { strings } from "../../Localization";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
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
    return strings.tabs.interests;
  };

  getInterestContent = index => {
    return this.getInterests().content[index];
  };

  handleHoverOverInterest = index => {
    this.setState({ currentHoverInterest: index });
  };

  renderInterests = () => {
    return (
      <List>
        {this.getInterests().content.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={this.handleHoverOverInterest.bind(this, index)}
            >
              <ListItem>
                <i className="material-icons">arrow_right</i>
                <ListItemIcon>
                  <i className="material-icons">{item.icon}</i>
                </ListItemIcon>
                <ListItemText style={styles.paragraph} primary={item.primary} />
              </ListItem>
            </div>
          );
        })}
      </List>
    );
  };

  renderInterestsExpansionPanels = () => {
    return (
      <div onMouseLeave={this.handleHoverOverInterest.bind(this, null)}>
        {this.getInterests().content.map((item, index) => {
          return (
            <ExpansionPanel
              key={index}
              expanded={this.state.currentHoverInterest === index}
              style={{
                marginTop: -1,
                marginBottom: -1,
                width: "50%"
              }}
            >
              <ExpansionPanelSummary
                key={index}
                onMouseEnter={this.handleHoverOverInterest.bind(this, index)}
              >
                <i className="material-icons">arrow_right</i>
                <i className="material-icons">{item.icon}</i>
                <Typography style={styles.drawerSummary}>
                  {item.summary}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {/* <Typography style={styles.paragraph}>{item.details}</Typography> */}
                {item.details}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  };

  renderInterestsSideShow = () => {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <Slide
            direction="up"
            in={true}
            exit={false}
            timeout={styles.slideTimeout}
          >
            <div>
              {this.getInterests().content.map((item, index) => {
                return (
                  <ExpansionPanel
                    key={index}
                    expanded={false}
                    style={{
                      backgroundColor:
                        this.state.currentHoverInterest === index
                          ? "#eeeeee"
                          : ""
                    }}
                  >
                    <ExpansionPanelSummary
                      key={index}
                      onMouseEnter={this.handleHoverOverInterest.bind(
                        this,
                        index
                      )}
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
          </Slide>
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
          {strings.tabs.interests.header}
        </Typography>

        {/* Sub-header */}
        <Typography style={styles.subheader}>
          I also do a couple more things outside of work!
          {<Emoji symbol="😄" />}
        </Typography>
        <br />

        {/* Interest Overview */}
        {this.renderInterestsSideShow()}
        {/* {this.renderInterests()} */}
        <br />
      </div>
    );
  }
}

export default TabInterests;

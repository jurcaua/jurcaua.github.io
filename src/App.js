import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Tooltip, TextField } from "@material-ui/core";

import ReadOnlyCopyField from "./ReadOnlyCopyField";

const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
  },

  inline: {
    display: "inline-flex",
    align: "center"
  },

  title: {
    fontSize: "50px",
    textAlign: "center",
    marginTop: "10px"
  },

  subtitle: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "10px"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      email: "jurcaua@gmail.com"
    };
  }

  handleChange = (event, value) => {
    this.setState({ currentTab: value });
  };

  render() {
    const { currentTab, email } = this.state;

    return (
      <div className={styles.root}>
        <AppBar position="static" color="default">
          <Typography style={styles.title} variant="h2">
            Alexander Jurcau
          </Typography>
          <ReadOnlyCopyField text={email} />
          <Tabs value={currentTab} onChange={this.handleChange} centered>
            <Tooltip title="Summary, contact info, etc.">
              <Tab label="Me" icon={<i className="material-icons">face</i>} />
            </Tooltip>
            <Tooltip title="Notable projects and experience.">
              <Tab
                disabled
                label="Projects"
                icon={<i className="material-icons">laptop_mac</i>}
              />
            </Tooltip>
            <Tooltip title="Things I like.">
              <Tab
                disabled
                label="Interests"
                icon={<i className="material-icons">favorite_border</i>}
              />
            </Tooltip>
          </Tabs>
        </AppBar>
        {currentTab === 0 && <p>This is a work in progress :)</p>}
        {currentTab === 1 && <div />}
        {currentTab === 2 && <div />}
      </div>
    );
  }
}

export default App;

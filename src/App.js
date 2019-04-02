import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Tooltip } from "@material-ui/core";
import TabMe from "./TabMe";
import ReadOnlyCopyField from "./ReadOnlyCopyField";
import { EMAIL } from "./Info";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  }
};

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

  render() {
    const { currentTab } = this.state;

    return (
      <div className={styles.root}>
        <AppBar position="static" color="default" style={styles.appBar}>
          <Typography style={styles.title} variant="h2">
            Alexander Jurcau
          </Typography>
          <ReadOnlyCopyField text={EMAIL} />
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
        {currentTab === 0 && <TabMe />}
        {currentTab === 1 && <div />}
        {currentTab === 2 && <div />}

        <AppBar position="static" color="default">
          <Typography style={styles.footer}>© 2019 Alexander Jurcau</Typography>
        </AppBar>
      </div>
    );
  }
}

export default App;

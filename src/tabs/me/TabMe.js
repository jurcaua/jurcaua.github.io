import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
  Button
} from "@material-ui/core";
import { localized } from "../../Localization";
import ResumeDialog from "../../resume/Resume";
import Emoji from "../../Emoji";

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

  paragraph: {
    fontSize: "22px"
  }
};

class TabMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOtherExperience: null,
      otherExperienceDialogOpen: false,
      resumeOpen: false
    };
  }

  getIntro = () => {
    const { summary } = localized().tabs.me;
    return (
      <div>
        {summary.map((point, index) => {
          return (
            <div key={index}>
              {point}
              <br />
            </div>
          );
        })}
      </div>
    );
  };

  getCurrentExperiences = () => {
    const { currentExperiences } = localized().tabs.me;
    return (
      <List>
        {currentExperiences.map((experience, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <i className="material-icons">{experience.icon}</i>
              </ListItemIcon>
              <ListItemText
                style={styles.paragraph}
                primary={experience.primary}
                secondary={experience.secondary}
              />
            </ListItem>
          );
        })}
      </List>
    );
  };

  handleOtherExperienceClick = (event, experience) => {
    this.setState({
      otherExperienceDialogOpen: true,
      selectedOtherExperience: experience
    });
  };

  handleOtherExperienceDialogClose = event => {
    this.setState({
      otherExperienceDialogOpen: false
    });
  };

  getOtherExperiencesHeader = () => {
    return localized().tabs.me.otherExperiencesHeader;
  };

  getOtherExperiences = () => {
    const { otherExperiences } = localized().tabs.me;
    return (
      <List>
        {otherExperiences.map((experience, index) => {
          return (
            <ListItem
              key={index}
              button
              divider
              onClick={event => {
                this.handleOtherExperienceClick(event, experience);
              }}
            >
              <ListItemIcon>
                <i className="material-icons">{experience.icon}</i>
              </ListItemIcon>
              <ListItemText
                style={styles.paragraph}
                primary={experience.primary}
                secondary={experience.secondary}
              />
              <ListItemIcon>
                <i className="material-icons">keyboard_arrow_right</i>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    );
  };

  getOtherExperiencesPopup = () => {
    if (this.state.selectedOtherExperience) {
      return (
        <Dialog
          open={this.state.otherExperienceDialogOpen}
          onClose={this.handleOtherExperienceDialogClose}
          fullWidth={true}
          maxWidth="md"
        >
          <DialogTitle>
            {this.state.selectedOtherExperience.dialogTitle}
            <IconButton
              onClick={this.handleOtherExperienceDialogClose}
              style={{ position: "absolute", right: "10px", top: "10px" }}
            >
              <i className="material-icons">close</i>
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {this.state.selectedOtherExperience.dialogText.map(
              (text, index) => {
                return (
                  <div
                    key={index}
                    style={{ display: "inline-flex", marginBottom: "10px" }}
                  >
                    <i className="material-icons">arrow_right</i>
                    <DialogContentText
                      style={{
                        marginLeft: "10px",
                        color: "#363738"
                      }}
                    >
                      {text}
                    </DialogContentText>
                  </div>
                );
              }
            )}
          </DialogContent>
        </Dialog>
      );
    }
  };

  handleOpenResume = event => {
    this.setState({ resumeOpen: true });
  };

  handleCloseResume = event => {
    this.setState({ resumeOpen: false });
  };

  render() {
    return (
      <div style={styles.root}>
        {/* Header */}
        <Typography style={styles.header}>
          {localized().greeting}
          {<Emoji symbol="👋" />}
        </Typography>
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <Button variant="outlined" onClick={this.handleOpenResume}>
            {localized().openResume}
          </Button>
        </div>

        {this.state.resumeOpen && (
          <ResumeDialog onClose={this.handleCloseResume} dialogSize="xl" />
        )}
        {/* Short Intro */}
        {this.getIntro()}

        {/* Current Experiences */}
        {this.getCurrentExperiences()}

        {/* Other Experiences */}
        {this.getOtherExperiencesHeader()}
        {this.getOtherExperiences()}
        {this.getOtherExperiencesPopup()}
      </div>
    );
  }
}

export default TabMe;

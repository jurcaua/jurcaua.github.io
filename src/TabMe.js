import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { BIRTHDAY } from "./Info";
import {
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton
} from "@material-ui/core";
import { strings } from "./localization";

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
      otherExperienceDialogOpen: false
    };
  }

  calculateAge = () => {
    var ageDifMs = Date.now() - BIRTHDAY.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  getCurrentExperiences = () => {
    const { currentExperiences } = strings;
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

  getOtherExperiences = () => {
    const { otherExperiences } = strings;
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

  render() {
    return (
      <div style={styles.root}>
        {/* Header */}
        <Typography style={styles.header}>Hello there! I'm Alex.</Typography>

        {/* Short Intro */}
        <Typography style={styles.paragraph}>
          Currently {this.calculateAge()} years old, and a fourth year student
          at the <b>University of Toronto</b> -- studying Computer Science with
          focuses in Algorithms, System Design, and Game Design.
        </Typography>
        <br />

        {/* Current Experiences */}
        <Typography style={styles.paragraph}>
          I am currently doing a 15 month internship at <b>Ubisoft Toronto</b>{" "}
          where I work on the tools team. Responsible for a variety of things,
          my focuses lie in:
        </Typography>
        {this.getCurrentExperiences()}

        {/* Other Experiences */}
        <Typography style={styles.paragraph}>
          Other related experience in the industry includes:
        </Typography>
        <List>{this.getOtherExperiences()}</List>

        {this.state.selectedOtherExperience && (
          <Dialog
            open={this.state.otherExperienceDialogOpen}
            onClose={this.handleOtherExperienceDialogClose}
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
              {this.state.selectedOtherExperience.dialogText.map(text => {
                return (
                  <div style={{ display: "inline-flex", marginBottom: "10px" }}>
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
              })}
            </DialogContent>
          </Dialog>
        )}
      </div>
    );
  }
}

export default TabMe;

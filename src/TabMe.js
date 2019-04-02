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
      currentExperiences: [
        {
          primary:
            "Leading development on a company-wide service-consolidating meeting productivity tool",
          secondary: "Python / C#",
          icon: "code"
        },
        {
          primary: "Maintaining our automated integration-testing pipeline",
          secondary: "C++",
          icon: "code"
        },
        {
          primary: "Developing an online service management web tool",
          secondary: "React / Redux",
          icon: "code"
        }
      ],
      otherExperiences: [
        {
          primary:
            "Working for an augmented reality startup -- as a programmer and tech consultant",
          secondary: "Unity",
          icon: "videogame_asset",
          dialogTitle: "ARnocular - Augmented Reality Software Developer",
          dialogText: [
            "Implemented a system that dynamically downloads AssetBundles and displays 3D models from a database, requesting and parsing CSV files",
            "Developed an accurate linear regress system using GPS points to smoothly move between perceived user locations",
            "Collaborated smoothly with Git version control; experience with Prod/QA/Dev pipeline, branching, merging, stashing, working with a remote repo"
          ]
        },
        {
          primary:
            "Teaching video game design to at-risk youth, following a game to completion",
          secondary: "Construct 2",
          icon: "school",
          dialogTitle: "Youth Fusion - Game Design Program Coordinator",
          dialogText: [
            "Taught for a local non-profit after-school program aimed to decreasing high school drop-out rates by teaching all aspects of video game development",
            "Oversaw the development of 2 fully polished games, following a Prototyping/Alpha/Beta/Gold staging process",
            "Verbally communicated complex game design concepts to children in simple and easy-to-understand ways"
          ]
        },
        {
          primary:
            "Working as Systems Support doing data validation, and integration and regression testing",
          secondary: "SQL Server (TSQL)",
          icon: "table_chart",
          dialogTitle: "Inmar - Systems Support",
          dialogText: [
            "Developed SSIS packages for data transfer between SQL Server databases and uploads/downloads from/to Excel files",
            "Developed T-SQL scripts for comprehensive field level discrepancy reports",
            "Created testing automation jobs for data integrity and consistency, including test case creation, execution and results logging"
          ]
        }
      ],
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
    const { currentExperiences } = this.state;
    return (
      <List>
        {currentExperiences.map(experience => {
          return (
            <ListItem>
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
    const { otherExperiences } = this.state;
    return (
      <List>
        {otherExperiences.map(experience => {
          return (
            <ListItem
              button
              divider="true"
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

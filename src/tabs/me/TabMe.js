import React, { useState } from "react";

// External Package Imports
import {
  Typography,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Button,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Emoji from "../../Emoji";

// Local Imports
import { localized } from "../../Localization";
import { SMALL_WIDTH_THRESHOLD_MARGINS } from "../../Constants";
import SocialMediaIconList from "./SocialMediaIconList";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "15vw"),
    marginRight: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "15vw")
  },
  header: {
    textAlign: "center",
    align: "center"
  },
  primaryList: {},
  secondaryList: {
    color: theme.palette.text.secondary
  },
  resumeRoot: {
    textAlign: "center",
    margin: theme.spacing(1)
  },
  expansionPanelRoot: {
    margin: theme.spacing(1)
  },
  otherExperienceExpandDetails: {
    display: "block"
  },
  otherExperienceExpandRoot: {
    display: "flex",
    marginBottom: theme.spacing(1)
  },
  otherExperienceExpandText: {
    color: "#363738"
  },
  heading: {
    flexShrink: 0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  greyIcon: {
    color: theme.palette.text.secondary
  },
  expansionPanelSummary: {
    "&:hover": {
      background: "lightgrey"
    }
  }
}));

const TabMe = props => {
  const [otherExperienceExpanded, setOtherExperienceExpanded] = useState(false);

  const classes = useStyles(props);

  const handleExpand = panel => (event, isExpanded) => {
    setOtherExperienceExpanded(isExpanded ? panel : false);
  };

  const handleOpenResume = event => {
    window.open(`${window.location.origin}/resume.pdf`, "_blank");
  };

  const getIntro = () => {
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

  const getCurrentExperiences = () => {
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
                disableTypography
                primary={
                  <Typography className={classes.primaryList} variant="body1">
                    {experience.primary}
                  </Typography>
                }
                secondary={
                  <Typography className={classes.secondaryList} variant="body2">
                    {experience.secondary}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    );
  };

  const getOtherExperiencesHeader = () => {
    return localized().tabs.me.otherExperiencesHeader;
  };

  const getOtherExperiences = () => {
    const { otherExperiences } = localized().tabs.me;
    return (
      <List>
        {otherExperiences.map((experience, index) => {
          return (
            <ExpansionPanel
              className={classes.expansionPanelRoot}
              key={index}
              expanded={otherExperienceExpanded === index}
              onChange={handleExpand(index)}
            >
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <div className={classes.greyIcon}>
                  <i className="material-icons">{experience.icon}</i>
                </div>
                <div>
                  <Typography className={classes.heading} variant="body1">
                    {experience.primary}
                  </Typography>
                  <Typography className={classes.secondaryHeading} variant="body2">
                    {experience.secondary}
                  </Typography>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.otherExperienceExpandDetails}>
                {experience.dialogText.map((text, index) => {
                  return (
                    <div key={index} className={classes.otherExperienceExpandRoot}>
                      <i className="material-icons">arrow_right</i>
                      <Typography className={classes.otherExperienceExpandText} variant="body2">
                        {text}
                      </Typography>
                    </div>
                  );
                })}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </List>
    );
  };

  return (
    <div className={classes.root}>
      {/* Header */}
      <Typography className={classes.header} variant="h4">
        {localized().greeting}
        {<Emoji symbol="👋" />}
      </Typography>

      {/* Social Media Icons */}
      <SocialMediaIconList />

      {/* Resume Section */}
      <div className={classes.resumeRoot}>
        <Button size="large" variant="outlined" onClick={handleOpenResume}>
          {localized().openResume}
        </Button>
      </div>

      {/* Short Intro */}
      {getIntro()}

      {/* Current Experiences */}
      {getCurrentExperiences()}

      {/* Other Experiences */}
      {getOtherExperiencesHeader()}
      {getOtherExperiences()}
    </div>
  );
};

export default TabMe;

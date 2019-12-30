import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import {
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
import { localized } from "../../Localization";
import Emoji from "../../Emoji";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SMALL_WIDTH_THRESHOLD_MARGINS } from "../../Constants";

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
    marginBottom: "10px"
  },
  otherExperienceExpandDetails: {
    display: "block"
  },
  otherExperienceExpandRoot: {
    display: "flex",
    marginBottom: "10px"
  },
  otherExperienceExpandText: {
    marginLeft: "10px",
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
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const classes = useStyles({ windowInnerWidth, ...props });

  const handleWindowSizeChange = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  // Effect used to add/remove event listener for window size changes and change number of columns accordingly
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return function cleanup() {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

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
      <div className={classes.resumeRoot}>
        <Button variant="outlined" onClick={handleOpenResume}>
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

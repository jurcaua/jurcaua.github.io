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
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
    marginRight: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "15vw"),
  },
  header: {
    textAlign: "center",
    align: "center",
  },
  primaryList: {},
  secondaryList: {
    color: theme.palette.text.secondary,
  },
  resumeRoot: {
    textAlign: "center",
    margin: theme.spacing(1),
  },
  accordionRoot: {
    margin: theme.spacing(1),
  },
  otherExperienceExpandDetails: {
    display: "block",
  },
  otherExperienceExpandRoot: {
    display: "flex",
    marginBottom: theme.spacing(1),
  },
  otherExperienceExpandText: {
    color: "#363738",
  },
  heading: {
    flexShrink: 0,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  secondaryHeading: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  greyIcon: {
    color: theme.palette.text.secondary,
  },
  accordionSummary: {
    "&:hover": {
      background: "lightgrey",
    },
  },
  experienceRoot: {
    marginLeft: theme.spacing(5),
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const TabMe = props => {
  const [otherExperienceExpanded, setOtherExperienceExpanded] = useState(false);

  const classes = useStyles(props);

  const handleExpand = panel => (event, isExpanded) => {
    setOtherExperienceExpanded(isExpanded ? panel : false);
  };

  const handleOpenResume = sublink => () => {
    window.open(`${window.location.origin}/${sublink}`, "_blank");
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
        {currentExperiences.map((section, index) => (
          <div key={section.name + index}>
            <ListItem>
              <ListItemIcon>
                <i className="material-icons">{section.icon}</i>
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography className={classes.primaryList} variant="body1">
                    <b>{section.name}</b>
                  </Typography>
                }
              />
            </ListItem>

            {section.experiences.map((experience, index) => {
              return (
                <ListItem className={classes.experienceRoot} key={index}>
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
          </div>
        ))}
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
            <Accordion
              className={classes.accordionRoot}
              key={index}
              expanded={otherExperienceExpanded === index}
              onChange={handleExpand(index)}
            >
              <AccordionSummary className={classes.accordionSummary} expandIcon={<ExpandMoreIcon />}>
                <div className={classes.greyIcon}>
                  <i className="material-icons">{experience.icon}</i>
                </div>
                <div>
                  <Typography className={classes.heading} variant="body1">
                    <b>{experience.title}</b>
                  </Typography>
                  <Typography className={classes.heading} variant="body1">
                    {experience.primary}
                  </Typography>
                  <Typography className={classes.secondaryHeading} variant="body2">
                    {experience.secondary}
                  </Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails className={classes.otherExperienceExpandDetails}>
                {experience.dialogText.map((text, index) => (
                  <div key={index} className={classes.otherExperienceExpandRoot}>
                    <i className="material-icons">arrow_right</i>
                    <Typography className={classes.otherExperienceExpandText} variant="body2">
                      {text}
                    </Typography>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
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
        {localized().resumeDocuments.map((r, key) => (
          <Button size="large" variant="outlined" onClick={handleOpenResume(r.sublink)} key={key}>
            {r.text}
          </Button>
        ))}
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

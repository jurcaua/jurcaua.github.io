import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { localized } from "../../Localization";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    padding: theme.spacing(1),
    zIndex: 11,
    bottom: "min(85px, 14vw)",
    right: theme.spacing(0),
  },
}));

const ProjectsNumberOverlay = ({ projects }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6">{localized().tabs.projects.displaying(Object.keys(projects).length)}</Typography>
    </Paper>
  );
};

export default ProjectsNumberOverlay;

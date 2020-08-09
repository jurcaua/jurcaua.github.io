import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";

import ProjectTagList from "./ProjectTagList";
import { GetRootTabLinkToPath, PROJECTS_TAB_SLUG } from "../../Constants";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: "none",
  },
  img: {
    width: "100%",
  },
  // Ref: https://mui-treasury.com/components/shadow
  paperRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxShadow: "0 8px 20px -12px rgba(0,0,0,0.3)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    },
  },
  contentsRoot: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const ProjectTile = ({ projectKey, project, highlights, ...rest }) => {
  const classes = useStyles(rest);

  const { name, shortDescription, mainImage, tags } = project;

  return (
    <RouterLink className={classes.link} to={`${GetRootTabLinkToPath(PROJECTS_TAB_SLUG)}/${projectKey}`}>
      <Paper className={classes.paperRoot} variant="outlined" square>
        <img className={classes.img} alt={name} src={mainImage} />
        <div className={classes.contentsRoot}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shortDescription}
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <ProjectTagList tags={tags} highlights={highlights} />
        </div>
      </Paper>
    </RouterLink>
  );
};

export default ProjectTile;

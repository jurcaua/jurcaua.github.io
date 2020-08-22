import React from "react";
import { Link, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  paperRoot: {
    display: "inline-block",
    margin: theme.spacing(1),
    padding: theme.spacing(0.5),
    "&:hover": {
      background: "lightgrey",
      cursor: "pointer",
    },
  },
  link: {
    margin: theme.spacing(1),
  },
}));

const ProjectLinkList = ({ links }) => {
  const classes = useStyles();

  const goToURL = url => () => {
    window.open(url, "_blank");
  };

  return (
    <div className={classes.root}>
      {links.map((link, index) => {
        return (
          <Paper key={index} className={classes.paperRoot} onClick={goToURL(link.url)} elevation={2}>
            <Link
              className={classes.link}
              variant="overline"
              underline="none"
              href={link.url}
              target="_blank" // Open in new tab
              rel="noopener" // https://material-ui.com/components/links/#security
            >
              {link.title.toUpperCase()}
            </Link>
          </Paper>
        );
      })}
    </div>
  );
};

export default ProjectLinkList;

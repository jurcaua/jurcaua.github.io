import React from "react";
import { Link, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paperRoot: {
    display: "inline",
    margin: theme.spacing(1)
  },
  link: {
    margin: theme.spacing(1)
  }
}));

const ProjectLinkList = ({ links, ...props }) => {
  const classes = useStyles(props);

  return (
    <div>
      {links.map((link, index) => {
        return (
          <Paper className={classes.paperRoot} elevation={2}>
            <Link
              key={index}
              className={classes.link}
              variant="overline"
              href={link.url}
              target="_blank" // Open in new tab
              rel="noopener" // https://material-ui.com/components/links/#security
            >
              {link.title}
            </Link>
          </Paper>
        );
      })}
    </div>
  );
};

export default ProjectLinkList;

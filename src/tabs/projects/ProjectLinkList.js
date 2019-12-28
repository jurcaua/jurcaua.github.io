import React from "react";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
        );
      })}
    </div>
  );
};

export default ProjectLinkList;

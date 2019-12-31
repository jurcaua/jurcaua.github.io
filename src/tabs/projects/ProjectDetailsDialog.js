import React from "react";

// External Package Imports
import { Dialog, DialogContent, Typography, IconButton, makeStyles } from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import ProjectTagList from "./ProjectTagList";
import ReactPlayer from "react-player";
import ProjectLinkList from "./ProjectLinkList";
import { localized } from "../../Localization";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const DialogTitle = props => {
  const { children, onClose, ...other } = props;
  const classes = useStyles(props);

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <i className="material-icons">close</i>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const ProjectDetailsDialog = ({ project, open, onClose, ...props }) => {
  const tryGetAttr = (obj, key, def) => {
    return (obj && obj[key]) || def;
  };

  const name = tryGetAttr(project, "name", "");
  const video = tryGetAttr(project, "video", undefined);
  const shortDescription = tryGetAttr(project, "shortDescription", "");
  const tags = tryGetAttr(project, "tags", []);
  const links = tryGetAttr(project, "links", []);

  const displayVisualContent = () => {
    if (video !== undefined) {
      return <ReactPlayer controls url={video} width={"100%"} height={"32vw"} />;
    }
  };

  const displayTags = () => {
    if (tags.length !== 0) {
      return <ProjectTagList tags={tags} />;
    }
  };

  const displayRelatedLinks = () => {
    if (links.length !== 0) {
      return (
        <React.Fragment>
          <Typography variant="h6">{localized().tabs.projects.dialog.linksTitle}</Typography>
          <ProjectLinkList links={links} />
        </React.Fragment>
      );
    }
  };

  // TODO: Support the back button (specifically for Android) to close the dialog by using a hash in the URL.
  //    Github Issue: https://github.com/mui-org/material-ui/issues/12759
  //    Example Fix in Codesandbox: https://codesandbox.io/s/material-demo-7zf07
  return (
    <Dialog open={open && project !== undefined} onClose={onClose}>
      <DialogTitle onClose={onClose}>{name}</DialogTitle>
      <DialogContent>
        {displayVisualContent()}
        <Typography>{shortDescription}</Typography>
        {displayTags()}

        {displayRelatedLinks()}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;

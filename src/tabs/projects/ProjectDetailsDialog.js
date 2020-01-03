import React from "react";

// External Package Imports
import {
  Dialog,
  DialogContent,
  Typography,
  IconButton,
  makeStyles,
  MobileStepper,
  Button,
  Paper,
  Zoom
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ReactPlayer from "react-player";
import SwipeableViews from "react-swipeable-views";

// Local Imports
import { localized } from "../../Localization";
import ProjectTagList from "./ProjectTagList";
import ProjectLinkList from "./ProjectLinkList";

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
  },
  imagesRoot: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1),
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  mainImage: {
    width: "100%"
  },
  reactPlayer: {
    position: "absolute",
    top: "0",
    left: "0"
  },
  videoPlayerRoot: {
    overflow: "hidden",
    position: "relative",
    paddingTop: "56.25%"
  },
  videoPlayerRootHidden: {
    overflow: "hidden",
    position: "relative",
    paddingTop: "56.25%",
    height: "0"
  },
  img: {
    display: "block",
    overflow: "hidden",
    width: "100%"
  },
  preloadImg: {
    display: "block",
    overflow: "hidden",
    width: "100%",
    height: "0"
  },
  imageCaption: {
    color: "dimgrey"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

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

const ProjectDetailsDialog = ({ project, highlights, open, onClose, ...props }) => {
  const classes = useStyles(props);

  const [activeStep, setActiveStep] = React.useState(0);

  const tryGetAttr = (obj, key, def) => {
    return (obj && obj[key]) || def;
  };

  const name = tryGetAttr(project, "name", "");
  const mainImage = tryGetAttr(project, "mainImage", undefined);
  const video = tryGetAttr(project, "video", undefined);
  const shortDescription = tryGetAttr(project, "shortDescription", undefined);
  const longDescription = tryGetAttr(project, "longDescription", undefined);
  const tags = tryGetAttr(project, "tags", []);
  const images = tryGetAttr(project, "images", []);
  const links = tryGetAttr(project, "links", []);

  // On close, reset the active step to 0 and pass along the onClose call with all arguments
  const handleClose = (...args) => {
    setActiveStep(0);
    onClose.call(args);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  const getVideoPlayer = className => {
    className = className || classes.videoPlayerRoot;

    return (
      <div key={video} className={className}>
        <ReactPlayer
          className={classes.reactPlayer}
          controls
          url={video}
          width={"100%"}
          height={"100%"}
        />
      </div>
    );
  };

  const getStepCount = (step, hasVideo) => {
    if (hasVideo) {
      return step - 1;
    }
    return step;
  };

  const displayVisualContent = () => {
    const hasVideo = video !== undefined;
    const hasImages = images.length !== 0;

    // If we have no images and just a video, we can just return the player.
    if (!hasImages && hasVideo) {
      return getVideoPlayer();
    } else if (hasImages) {
      const maxSteps = images.length + (hasVideo ? 1 : 0);

      let imageViews = images.map((image, index) => (
        <div key={index}>
          {/* Issue I ran into was having nearby pictures really large, 
          then forcing the current picture to match that size.
          Instead, we still render nearby photos but instead we force the height to 0 (classes.preloadImg), 
          so then the current picture is always the largest size in the current loaded set of images. */}
          {Math.abs(getStepCount(activeStep, hasVideo) - index) <= 2 ? (
            Math.abs(getStepCount(activeStep, hasVideo) - index) === 0 ? (
              <img className={classes.img} src={image.imgPath} alt={image.caption} />
            ) : (
              <img className={classes.preloadImg} src={image.imgPath} alt={image.caption} />
            )
          ) : null}
        </div>
      ));
      if (hasVideo) {
        if (activeStep === 0) {
          imageViews.unshift(getVideoPlayer());
        } else {
          imageViews.unshift(getVideoPlayer(classes.videoPlayerRootHidden));
        }
      }

      return (
        <Paper className={classes.imagesRoot}>
          <SwipeableViews
            axis={"x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {imageViews}
          </SwipeableViews>
          <Paper square elevation={0} className={classes.header}>
            {/* If we have a video, consider the first step to just have an empty caption */}
            {/* Otherwise, return the caption as usual (whose index may have to be subtracted by 1 if we have a video) */}
            <Typography className={classes.imageCaption} variant="subtitle1">
              {hasVideo && activeStep === 0
                ? ""
                : images[getStepCount(activeStep, hasVideo)].caption}
            </Typography>
          </Paper>
          <MobileStepper
            steps={maxSteps}
            variant="dots"
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <KeyboardArrowLeft />
                Back
              </Button>
            }
          />
        </Paper>
      );
    } else if (mainImage !== undefined) {
      return <img className={classes.mainImage} alt={name} src={mainImage} />;
    }
  };

  const displayDescription = () => {
    if (longDescription !== undefined) {
      return longDescription;
    } else if (shortDescription !== undefined) {
      return <Typography>{shortDescription}</Typography>;
    }
    return null;
  };

  const displayTags = () => {
    if (tags.length !== 0) {
      return <ProjectTagList tags={tags} highlights={highlights} />;
    }
  };

  const displayRelatedLinks = () => {
    if (links.length !== 0) {
      return (
        <React.Fragment>
          <Typography variant="h5">{localized().tabs.projects.dialog.linksTitle}</Typography>
          <ProjectLinkList links={links} />
        </React.Fragment>
      );
    }
  };

  // TODO: Support the back button (specifically for Android) to close the dialog by using a hash in the URL.
  //    Github Issue: https://github.com/mui-org/material-ui/issues/12759
  //    Example Fix in Codesandbox: https://codesandbox.io/s/material-demo-7zf07
  return (
    <Dialog
      open={open && project !== undefined}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <DialogTitle onClose={handleClose}>{name}</DialogTitle>
      <DialogContent>
        {displayVisualContent()}
        {displayDescription()}
        {displayTags()}
        {displayRelatedLinks()}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;

import React from "react";
import { makeStyles } from "@material-ui/core";
import ProjectsDisplay from "./ProjectsDisplay";
import ProjectsNumberOverlay from "./ProjectsNumberOverlay";
import { localized } from "../../Localization";
import { SMALL_WIDTH_THRESHOLD_MARGINS } from "../../Constants";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "10vw"),
    paddingRight: props =>
      props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "10vw",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const TabProjects = props => {
  const classes = useStyles(props);

  const projects = localized().tabs.projects.content;

  return (
    <div className={classes.root}>
      {/* Filter Options Here */}
      {/* フィルター設定 */}

      {/* Displaying Project Tiles */}
      {/* プロジェクトのタイルを表現する */}
      <ProjectsDisplay projects={projects} />

      {/* Display Number of Projects Displayed */}
      {/* 表現されているプロジェクト数 */}
      <ProjectsNumberOverlay projects={projects} />
    </div>
  );
};

export default TabProjects;

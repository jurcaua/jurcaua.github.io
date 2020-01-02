import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import ProjectsDisplay from "./ProjectsDisplay";
import ProjectsNumberOverlay from "./ProjectsNumberOverlay";
import { localized } from "../../Localization";
import { SMALL_WIDTH_THRESHOLD_MARGINS } from "../../Constants";
import ProjectsFilter from "./ProjectsFilter";

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

  const [currentFilter, setCurrentFilter] = useState([]);

  const handleFilterChange = filterTagList => {
    setCurrentFilter(filterTagList);
  };

  const filterProjects = unfilteredProjects => {
    return unfilteredProjects.filter(proj => currentFilter.every(t => proj.tags.includes(t)));
  };

  const projects = filterProjects(localized().tabs.projects.content);

  return (
    <div className={classes.root}>
      {/* Filter Options Here */}
      {/* フィルター設定 */}
      <ProjectsFilter onChange={handleFilterChange} windowInnerWidth={props.windowInnerWidth} />

      {/* Displaying Project Tiles */}
      {/* プロジェクトのタイルを表現する */}
      <ProjectsDisplay projects={projects} windowInnerWidth={props.windowInnerWidth} />

      {/* Display Number of Projects Displayed */}
      {/* 表現されているプロジェクト数 */}
      <ProjectsNumberOverlay projects={projects} />
    </div>
  );
};

export default TabProjects;

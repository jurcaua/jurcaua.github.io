import React, { useState } from "react";

// Package Imports
import { makeStyles } from "@material-ui/core";

// Local Imports
import { SMALL_WIDTH_THRESHOLD_MARGINS } from "../../Constants";
import { getFilteredProjects, customBoolsToFunctions } from "../../Localization";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsDisplay from "./ProjectsDisplay";
import ProjectsNumberOverlay from "./ProjectsNumberOverlay";

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: props => (props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "15vw"),
    paddingRight: props =>
      props.windowInnerWidth < SMALL_WIDTH_THRESHOLD_MARGINS ? "5vw" : "15vw",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const TabProjects = props => {
  const classes = useStyles(props);

  const [currentFilter, setCurrentFilter] = useState([]);
  const [customFilterBools, setCustomFilterBools] = useState([]);

  const handleFilterChange = (filterTagList, customFilterBools) => {
    setCurrentFilter(filterTagList);
    setCustomFilterBools(customFilterBools);
  };

  const projects = getFilteredProjects(currentFilter, customBoolsToFunctions(customFilterBools));

  return (
    <div className={classes.root}>
      {/* Filter Options Here */}
      {/* フィルター設定 */}
      <ProjectsFilter onChange={handleFilterChange} windowInnerWidth={props.windowInnerWidth} />

      {/* Displaying Project Tiles */}
      {/* プロジェクトのタイルを表現する */}
      <ProjectsDisplay
        projects={projects}
        filter={currentFilter}
        windowInnerWidth={props.windowInnerWidth}
      />

      {/* Display Number of Projects Displayed */}
      {/* 表現されているプロジェクト数 */}
      <ProjectsNumberOverlay projects={projects} />
    </div>
  );
};

export default TabProjects;

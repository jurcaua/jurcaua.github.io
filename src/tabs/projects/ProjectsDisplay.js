import React from "react";
import { useHistory } from "react-router-dom";

// External Package Imports
import { makeStyles } from "@material-ui/styles";

// Local Imports
import ProjectTile from "./ProjectTile";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { GetRootTabLinkToPath, PROJECTS_TAB_SLUG } from "../../Constants";

const useStyles = makeStyles(theme => ({
  projectsRoot: {
    height: "auto",
    display: "grid",
    gridGap: "1rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  },
}));

const ProjectsDisplay = ({ projects, selected, filter }) => {
  const history = useHistory();

  const classes = useStyles();

  const getSelected = () => {
    if (selected) {
      return projects[selected];
    }
    return undefined;
  };

  // ------------------------------------
  // Handle closing, and make sure we only set the selected project to undefined after we close the dialog
  const handleDialogClose = () => {
    history.push(GetRootTabLinkToPath(PROJECTS_TAB_SLUG));
  };
  // ------------------------------------

  return (
    <div>
      <div className={classes.projectsRoot}>
        {Object.keys(projects).map(projectKey => (
          <ProjectTile key={projectKey} projectKey={projectKey} project={projects[projectKey]} highlights={filter} />
        ))}
      </div>
      <ProjectDetailsDialog project={getSelected()} highlights={filter} onClose={handleDialogClose} />
    </div>
  );
};

export default ProjectsDisplay;

import React, { useState, useEffect } from "react";

// External Package Imports
import { Grid } from "@material-ui/core";

// Local Imports
import ProjectTile from "./ProjectTile";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { SMALL_WIDTH_THRESHOLD_GRID } from "../../Constants";

const ProjectsDisplay = ({ projects, windowInnerWidth }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleProjectClick = (event, project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const getGridSize = () => {
    // 6 --> for 2 columns | 12 --> for 1 column (for Material UI Grid system)
    if (windowInnerWidth > SMALL_WIDTH_THRESHOLD_GRID) {
      return 6;
    }
    return 12;
  };

  // ------------------------------------
  // Handle closing, and make sure we only set the selected project to undefined after we close the dialog
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (dialogOpen === false) {
      setSelectedProject(undefined);
    }
  }, [dialogOpen]);
  // ------------------------------------

  return (
    <div>
      <Grid container spacing={3}>
        {projects.map((project, index) => {
          return (
            <Grid key={index} item xs={getGridSize()}>
              <ProjectTile project={project} onClick={handleProjectClick} />
            </Grid>
          );
        })}
      </Grid>
      <ProjectDetailsDialog
        project={selectedProject}
        open={dialogOpen}
        onClose={handleDialogClose}
      />
    </div>
  );
};

export default ProjectsDisplay;

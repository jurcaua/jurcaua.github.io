import React, { useState, useEffect } from "react";

// External Package Imports
import { Grid } from "@material-ui/core";

// Local Imports
import ProjectTile from "./ProjectTile";
import ProjectDetailsDialog from "./ProjectDetailsDialog";
import { SMALL_WIDTH_THRESHOLD_GRID } from "../../Constants";

const getGridSize = () => {
  // 6 --> for 2 columns | 12 --> for 1 column (for Material UI Grid system)
  if (window.innerWidth > SMALL_WIDTH_THRESHOLD_GRID) {
    return 6;
  }
  return 12;
};

const ProjectsDisplay = ({ projects }) => {
  const [projectGridSize, setProjectGridSize] = useState(getGridSize());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(undefined);

  const handleProjectClick = (event, project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedProject(undefined);
  };

  const handleWindowSizeChange = () => {
    setProjectGridSize(getGridSize());
  };

  // Effect used to add/remove event listener for window size changes and change number of columns accordingly
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return function cleanup() {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return (
    <div>
      <Grid container spacing={3}>
        {projects.map((project, index) => {
          return (
            <Grid key={index} item xs={projectGridSize}>
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

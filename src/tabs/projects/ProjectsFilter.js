import React from "react";

// Package Imports
import { makeStyles } from "@material-ui/styles";
import { Fab, Grid, Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

// Local Imports
import { localized } from "../../Localization";
import ProjectTagList from "./ProjectTagList";
import ProjectsFilterDialog from "./ProjectsFilterDialog";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  currentFilterTagsPaperRoot: {
    padding: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProjectsFilter = ({ windowInnerWidth, onChange, ...props }) => {
  const classes = useStyles(props);

  const [filterTags, setFilterTags] = React.useState([]);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleApply = newFilters => {
    setDialogOpen(false);

    setFilterTags(newFilters);
    onChange(newFilters);
  };

  const renderCurrentFilterTags = () => {
    if (filterTags.length === 0) {
      // !0 -> "None"
      return <ProjectTagList tags={["!0"]} />;
    } else {
      return <ProjectTagList tags={filterTags} />;
    }
  };

  // Keep increasing the grid size as the window width gets smaller
  const getFilterButtonXS = () => {
    if (windowInnerWidth > 1150) {
      return 2;
    } else if (windowInnerWidth > 700) {
      return 3;
    } else if (windowInnerWidth > 550) {
      return 4;
    } else if (windowInnerWidth > 450) {
      return 5;
    }
    return 6;
  };

  return (
    <div>
      <Grid
        className={classes.root}
        container
        spacing={1}
        justify="space-between"
        alignItems="center"
      >
        {/* Current Filters (Title + Tag List) */}
        <Grid container item xs direction="column" justify="center" alignItems="flex-start">
          <Grid item>
            <Typography variant="overline" component="h1">
              {localized().tabs.projects.filter.currentFiltersTitle}
            </Typography>
          </Grid>
          <Grid item>{renderCurrentFilterTags()}</Grid>
        </Grid>

        {/* Filter Button */}
        <Grid container item xs={getFilterButtonXS()} justify="flex-end" alignItems="center">
          <Grid item>
            <Fab
              className={classes.extendedIcon}
              onClick={() => setDialogOpen(true)}
              variant="extended"
            >
              <FilterListIcon className={classes.extendedIcon} />
              {localized().tabs.projects.filter.button}
            </Fab>
          </Grid>
        </Grid>
      </Grid>

      {/* Filter Selection Dialog */}
      <ProjectsFilterDialog
        open={dialogOpen}
        onApply={handleApply}
        onCancel={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default ProjectsFilter;

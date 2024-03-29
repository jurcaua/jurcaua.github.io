import React from "react";

// External Package Imports
import { Chip, makeStyles } from "@material-ui/core";

// Local Imports
import { localizedProjectTag } from "../../Localization";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ProjectTagList = ({ tags, highlights = [], highlightColor = "primary", color = "default" }) => {
  const classes = useStyles();

  return (
    <div>
      {tags.map((tag, index) => {
        return (
          <Chip
            key={index}
            className={classes.chip}
            color={highlights.includes(tag) ? highlightColor : color}
            label={localizedProjectTag(tag)}
          />
        );
      })}
    </div>
  );
};

export default ProjectTagList;

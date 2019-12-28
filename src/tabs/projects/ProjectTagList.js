import React from "react";

// External Package Imports
import { Chip, makeStyles } from "@material-ui/core";

// Local Imports
import { localizedProjectTag } from "../../Localization";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5)
  }
}));

const ProjectTagList = ({ tags, ...props }) => {
  const classes = useStyles(props);
  
  return (
    <div>
      {tags.map((tag, index) => {
        return <Chip key={index} className={classes.chip} label={localizedProjectTag(tag)} />;
      })}
    </div>
  );
};

export default ProjectTagList;

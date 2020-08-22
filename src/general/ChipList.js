import React from "react";

// Package Imports
import { Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const ChipList = ({ list, color = "default" }) => {
  const classes = useStyles();

  return (
    <div>
      {list.map((val, index) => {
        return <Chip key={index} className={classes.chip} color={color} label={val} />;
      })}
    </div>
  );
};

export default ChipList;

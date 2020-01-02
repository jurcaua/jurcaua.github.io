import React, { useState } from "react";

// Package Imports
import update from "immutability-helper";
import { makeStyles } from "@material-ui/styles";
import {
  Dialog,
  Zoom,
  DialogContent,
  IconButton,
  Typography,
  DialogActions,
  Button,
  Select,
  Chip,
  MenuItem,
  Checkbox,
  ListItemText,
  Input,
  Grid
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

// Local Imports
import { localized, getGroupedProjectTags } from "../../Localization";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  dialogRoot: {
    minWidth: "350px"
  },
  dialogContent: {
    overflowY: "hidden"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  tagSelectRoot: {
    width: "100%"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});

const DialogTitle = props => {
  const { children, onClose, ...other } = props;
  const classes = useStyles(props);

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <i className="material-icons">close</i>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};

const getEmptyDefaultSelectedTags = () => {
  const groupedTags = getGroupedProjectTags();

  return Object.keys(groupedTags).reduce((obj, key) => {
    obj[key] = [];
    return obj;
  }, {});
};

const ProjectsFilterDialog = ({ open, onApply, onCancel, ...props }) => {
  const classes = useStyles(props);

  const defaultSelectedTags = getEmptyDefaultSelectedTags();
  const [onEnterSelectedTags, setOnEnterSelectedTags] = useState(defaultSelectedTags);
  const [selectedTags, setSelectedTags] = useState(defaultSelectedTags);

  const handleEnter = () => {
    setOnEnterSelectedTags(selectedTags);
  };

  const handleApply = () => {
    onApply(selectedTags);
  };

  const handleClose = (...args) => {
    setSelectedTags(onEnterSelectedTags);
    onCancel.call(args);
  };

  const handleTags = key => event => {
    setSelectedTags(update(selectedTags, { [key]: { $set: event.target.value } }));
  };

  const renderFilterGroups = () => {
    const groupedTags = getGroupedProjectTags();

    return (
      <Grid container spacing={1} direction="column" justify="center" alignItems="center">
        {Object.keys(groupedTags).map(key => (
          <Grid
            key={key}
            container
            item
            xs={12}
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Typography variant="overline">{groupedTags[key].title}</Typography>
            </Grid>
            <Grid item xs>
              <Select
                className={classes.tagSelectRoot}
                multiple
                value={selectedTags[key]}
                onChange={handleTags(key)}
                input={<Input id="select-multiple-checkbox" />}
                name="tags"
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        className={classes.chip}
                        label={groupedTags[key].mappings[value]}
                      />
                    ))}
                  </div>
                )}
              >
                {Object.keys(groupedTags[key].mappings).map(tagKey => (
                  <MenuItem key={tagKey} value={tagKey}>
                    <Checkbox
                      checked={selectedTags[key] && selectedTags[key].indexOf(tagKey) > -1}
                    />
                    <ListItemText primary={groupedTags[key].mappings[tagKey]} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Dialog
      PaperProps={{ className: classes.dialogRoot }}
      open={open}
      onEnter={handleEnter}
      onClose={handleClose}
      TransitionComponent={Transition}
      maxWidth="md"
    >
      <DialogTitle onClose={handleClose}>
        {localized().tabs.projects.filter.dialog.title}
      </DialogTitle>
      <DialogContent classes={{ root: classes.dialogContent }}>
        {renderFilterGroups()}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSelectedTags(defaultSelectedTags)} color="primary" variant="text">
          {localized().tabs.projects.filter.dialog.resetFiltersButton}
        </Button>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          {localized().tabs.projects.filter.dialog.cancelButton}
        </Button>
        <Button onClick={handleApply} color="primary" variant="contained">
          {localized().tabs.projects.filter.dialog.applyButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectsFilterDialog;

import React from "react";

// External Package Imports
import { Tooltip, Button, makeStyles } from "@material-ui/core";

// Local Imports
import { getLanguage, localized } from "./Localization";
import { getSVG } from "./Flags";

const useStyles = makeStyles(theme => ({
  svgButton: {
    position: "fixed",
    margin: "5px",
    zIndex: 10,
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

const LanguageSwitcher = ({ onClick, ...props }) => {
  const classes = useStyles(props);

  const switchLanguageTo = getLanguage() === "jp" ? "en" : "jp";
  const switchLanguageToFlag = getSVG(switchLanguageTo);

  return (
    <Tooltip title={localized().changeLanguage} placement="left">
      <div className={classes.svgButton}>
        <Button onClick={event => onClick(switchLanguageTo)}>{switchLanguageToFlag}</Button>
      </div>
    </Tooltip>
  );
};

export default LanguageSwitcher;

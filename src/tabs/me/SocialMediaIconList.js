import React from "react";

import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { localized } from "../../Localization";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
  },
  greyIcon: {
    color: "dimgrey",
  },
}));

const SocialMediaIconList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {localized().socialMedia.map((socialMedia, index) => {
        const SocialMediaIcon = socialMedia.icon;
        return (
          <Tooltip key={index} title={socialMedia.name} placement="bottom">
            <IconButton className={classes.greyIcon} onClick={() => window.open(socialMedia.url, "_blank")}>
              <SocialMediaIcon />
            </IconButton>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SocialMediaIconList;

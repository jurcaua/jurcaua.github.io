import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

import { IconButton, InputAdornment, TextField, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Icon from "@material-ui/core/Icon";

import { localized } from "./Localization";

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline-flex",
    align: "center",
  },
  text: {
    textAlign: "center",
    marginTop: "10px",
    display: "inline-flex",
    align: "center",
  },
  input: {
    fontSize: "15px",
  },
  bigIcon: {
    fontSize: "20px",
  },
}));

const ReadOnlyCopyField = ({ text }) => {
  const [copyToastId, setCopyToastId] = useState(null);
  const emailRef = useRef();

  const classes = useStyles();

  const copyToClipboard = e => {
    emailRef.current.select();
    document.execCommand("copy");
    e.target.focus();

    if (!toast.isActive(copyToastId)) {
      let newToastId = toast(localized().copyConfirmNotification, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setCopyToastId(newToastId);
    }
  };

  const getCopyButton = () => {
    if (document.queryCommandSupported("copy")) {
      return (
        <InputAdornment position="end">
          <Tooltip title={localized().copyButtonTooltip}>
            <IconButton className={classes.inline} onClick={copyToClipboard}>
              <Icon className={classes.bigIcon}>file_copy</Icon>
            </IconButton>
          </Tooltip>
        </InputAdornment>
      );
    }
    return null;
  };

  return (
    <div align="center">
      <TextField
        className={classes.text}
        variant="outlined"
        value={text}
        inputRef={emailRef}
        InputProps={{
          endAdornment: getCopyButton(),
          className: classes.input,
          readOnly: true,
        }}
      />
    </div>
  );
};

export default ReadOnlyCopyField;

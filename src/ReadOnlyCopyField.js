import React from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

const styles = {
  inline: {
    display: "inline-flex",
    align: "center"
  },

  text: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "10px",
    display: "inline-flex",
    align: "center"
  }
};

let emailRef = null;

const copyToClipboard = e => {
  emailRef.select();
  document.execCommand("copy");
  e.target.focus();
};

const getCopyButton = () => {
  if (document.queryCommandSupported("copy")) {
    return (
      <InputAdornment position="end">
        <IconButton style={styles.inline} onClick={copyToClipboard}>
          <Icon style={{ fontSize: "20px" }}>file_copy</Icon>
        </IconButton>
      </InputAdornment>
    );
  }
  return null;
};

const ReadOnlyCopyField = ({ text }) => {
  return (
    <div align="center">
      <TextField
        style={styles.text}
        variant="outlined"
        value={text}
        inputRef={textArea => (emailRef = textArea)}
        InputProps={{
          endAdornment: getCopyButton(),
          style: { fontSize: 15 },
          readOnly: true
        }}
      />
    </div>
  );
};

export default ReadOnlyCopyField;

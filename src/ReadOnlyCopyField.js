import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { toast } from "react-toastify";
import { strings } from "./localization";

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

class ReadOnlyCopyField extends Component {
  emailRef = null;

  constructor(props) {
    super(props);

    this.state = {
      copyToastId: null
    };
  }

  getCopyButton = () => {
    if (document.queryCommandSupported("copy")) {
      return (
        <InputAdornment position="end">
          <IconButton style={styles.inline} onClick={this.copyToClipboard}>
            <Icon style={{ fontSize: "20px" }}>file_copy</Icon>
          </IconButton>
        </InputAdornment>
      );
    }
    return null;
  };

  copyToClipboard = e => {
    this.emailRef.select();
    document.execCommand("copy");
    e.target.focus();

    if (!toast.isActive(this.state.copyToastId)) {
      let newToastId = toast(strings.copyConfirmNotification, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
      });
      this.setState({
        copyToastId: newToastId
      });
    }
  };

  render() {
    const { text } = this.props;

    return (
      <div align="center">
        <TextField
          style={styles.text}
          variant="outlined"
          value={text}
          inputRef={textArea => (this.emailRef = textArea)}
          InputProps={{
            endAdornment: this.getCopyButton(),
            style: { fontSize: 15 },
            readOnly: true
          }}
        />
      </div>
    );
  }
}

export default ReadOnlyCopyField;

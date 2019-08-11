import React, { Component } from "react";
import { Document, Page, Outline } from "react-pdf";
import resume from "./Resume.pdf";
import { pdfjs } from "react-pdf";
import throttle from "lodash.throttle";
import { Dialog, Divider, DialogContent, IconButton } from "@material-ui/core";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const dialogPDFWidthMapping = {
  sm: 0.45,
  md: 0.74,
  lg: 1,
  xl: 1
};

class ResumeDialog extends Component {
  constructor(props) {
    super(props);

    if (!this.props.dialogSize) {
      console.error("You must pass in prop 'dialogSize'!");
    }
    if (!dialogPDFWidthMapping[this.props.dialogSize]) {
      console.error(
        "Invalid dialog size. Here is the mapping object: ",
        dialogPDFWidthMapping
      );
    }

    this.state = { width: null, dialogOpen: true };
  }

  componentDidMount() {
    this.setDivSize();
    window.addEventListener("resize", throttle(this.setDivSize, 500));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", throttle(this.setDivSize, 500));
  }

  setDivSize = () => {
    if (this.pdfWrapper) {
      this.setState({
        width:
          this.pdfWrapper.getBoundingClientRect().width *
          dialogPDFWidthMapping[this.props.dialogSize]
      });
    }
  };

  render() {
    return (
      <div
        id="row"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          overflow: "hidden"
        }}
      >
        <div
          id="placeholderWrapper"
          style={{ width: "10vw", height: "100vh" }}
        />
        <div
          id="pdfWrapper"
          style={{ width: "90vw" }}
          ref={ref => (this.pdfWrapper = ref)}
        >
          <Dialog
            open={this.state.dialogOpen}
            onClose={this.props.onClose}
            fullWidth={true}
            maxWidth={this.props.dialogSize}
          >
            <DialogContent>
              <Document file={resume}>
                <Outline />
                <Page
                  pageNumber={1}
                  renderTextLayer={false}
                  width={this.state.width}
                />
                <Divider />
                <Page
                  pageNumber={2}
                  renderTextLayer={false}
                  width={this.state.width}
                />
              </Document>
              <IconButton
                onClick={this.props.onClose}
                style={{ position: "absolute", right: "10px", top: "10px" }}
              >
                <i className="material-icons">close</i>
              </IconButton>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default ResumeDialog;

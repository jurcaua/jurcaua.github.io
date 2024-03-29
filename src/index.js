import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { HashRouter } from "react-router-dom";

let theme = createMuiTheme({
  typography: {
    fontFamily: '"NotoSansCJKjp", sans-serif',
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
        backgroundColor: "black",
      },
      arrow: {
        color: "black",
      },
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

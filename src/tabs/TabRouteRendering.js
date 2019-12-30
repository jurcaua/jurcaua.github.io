import React, { useState, useEffect } from "react";

// External Package Imports
import { Switch, Route } from "react-router-dom";

// Local Imports
import { GetRootTabRouterPath } from "../Constants";
import TabMe from "./me/TabMe";
import TabProjects from "./projects/TabProjects";
import TabInterests from "./interests/TabInterests";

const TabRouteRendering = props => {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  // Effect used to add/remove event listener for window size changes and change number of columns accordingly
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return function cleanup() {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return (
    <Switch>
      <Route
        exact
        path={GetRootTabRouterPath("me")}
        render={() => <TabMe windowInnerWidth={windowInnerWidth} />}
      />
      <Route
        exact
        path={GetRootTabRouterPath("projects")}
        render={() => <TabProjects windowInnerWidth={windowInnerWidth} />}
      />
      <Route
        exact
        path={GetRootTabRouterPath("interests")}
        render={() => <TabInterests windowInnerWidth={windowInnerWidth} />}
      />
    </Switch>
  );
};

export default TabRouteRendering;

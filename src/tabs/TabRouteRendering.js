import React, { useState, useEffect } from "react";

// External Package Imports
import { Switch, Route } from "react-router-dom";

// Local Imports
import { GetRootTabRouterPath, ME_TAB_SLUG, PROJECTS_TAB_SLUG, INTERESTS_TAB_SLUG } from "../Constants";
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
      <Route exact path={GetRootTabRouterPath(ME_TAB_SLUG)}>
        <TabMe windowInnerWidth={windowInnerWidth} />
      </Route>
      <Route exact path={GetRootTabRouterPath(PROJECTS_TAB_SLUG)}>
        <TabProjects windowInnerWidth={windowInnerWidth} />
      </Route>
      <Route
        exact
        path={[GetRootTabRouterPath(INTERESTS_TAB_SLUG), `${GetRootTabRouterPath(INTERESTS_TAB_SLUG)}/:interest`]}
        render={routeProps => <TabInterests {...routeProps} windowInnerWidth={windowInnerWidth} />}
      />
    </Switch>
  );
};

export default TabRouteRendering;

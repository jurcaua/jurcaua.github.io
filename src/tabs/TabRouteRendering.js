import React from "react";

// External Package Imports
import { Switch, Route } from "react-router-dom";

// Local Imports
import { GetRootTabRouterPath } from "../Constants";
import TabMe from "./me/TabMe";
import TabInterests from "./interests/TabInterests";

const TabRouteRendering = props => {
  return (
    <Switch>
      <Route exact path={GetRootTabRouterPath("me")} render={() => <TabMe />} />
      <Route exact path={GetRootTabRouterPath("projects")} render={() => <div />} />
      <Route exact path={GetRootTabRouterPath("interests")} render={() => <TabInterests />} />
    </Switch>
  );
};

export default TabRouteRendering;

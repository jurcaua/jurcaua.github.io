import React from "react";

// External Package Imports
import { Switch, Route } from "react-router-dom";

// Local Imports
import { RootTab } from "../Constants";
import TabMe from "./me/TabMe";
import TabInterests from "./interests/TabInterests";

const TabRouteRendering = props => {
  return (
    <Switch>
      <Route exact path={RootTab.me.path} render={() => <TabMe />} />
      <Route exact path={RootTab.projects.path} render={() => <div />} />
      <Route exact path={RootTab.interests.path} render={() => <TabInterests />} />
    </Switch>
  );
};

export default TabRouteRendering;

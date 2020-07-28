import Homebar from "./Homebar";
import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Lobby from "./Lobby";
import Workspace from "./Workspace";

const Home = () => {
  return (
    <div className="home">
      <Homebar />
      <Switch>
        <Redirect exact path="/" to="/workspace" />
        <Route exact path="/workspace" component={Lobby} />
        <Redirect
          exact
          path="/workspace/:workspaceId"
          to="/workspace/:workspaceId/channel/1"
        />
        <Route
          path="/workspace/:workspaceId/channel/:channelId"
          component={Workspace}
        />
      </Switch>
    </div>
  );
};

export default Home;

import React from "react";
import Channel from "./Channel";
import Workspacebar from "./Workspacebar";
import { Route } from "react-router";

const Workspace = () => {
  return (
    <div className="workspace">
      <Workspacebar />
      <Route
        to="/workspace/:workspaceId/channel:/channelId"
        component={Channel}
      />
    </div>
  );
};

export default Workspace;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import InvitePopover from "./InvitePopover";

const Workspacebar = () => {
  const [openInvitePopover, setOpenInvitePopover] = useState(false);
  const { workspaceId } = useParams();
  return (
    <div className="workspacebar">
      <header>
        <div>workspace name {workspaceId}</div>
        <button className="material-icons">more_vert</button>
      </header>
      <ul className="workspacebar-nav">
        <li>
          <Link to={`/workspace/${workspaceId}/channel/1`}>General</Link>
        </li>
        <li>
          <Link to={`/workspace/${workspaceId}/channel/2`}>channel name</Link>
        </li>
        <li>
          <Link to={`/workspace/${workspaceId}/channel/3`}>channel name</Link>
        </li>
      </ul>
      <footer>
        <div className="withPopover-btn">
          {openInvitePopover && <InvitePopover />}
          <button
            onClick={() => {
              setOpenInvitePopover(!openInvitePopover);
            }}
          >
            <i className="material-icons">person</i>
            <span>워크스페이스 맴버</span>
          </button>
        </div>
        <div className="withPopover-btn">
          <button>
            <i className="material-icons">apps</i>
            <span>앱 디렉토리</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Workspacebar;

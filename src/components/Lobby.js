import React from "react";

const Lobby = () => {
  return (
    <div className="lobby">
      <div className="mentionbar">
        <header>mention title</header>
        <ul>
          <li>mention content</li>
          <li>mention content</li>
          <li>mention content</li>
          <li>mention content</li>
        </ul>
      </div>
      <div className="workspaces">
        <div>workspace</div>
        <div>
          <button className="material-icons">add</button>
          <button className="material-icons">turned_in</button>
          <button className="material-icons">list</button>
        </div>
        <ul>
          <li>workspace name</li>
          <li>workspace name</li>
          <li>workspace name</li>
          <li>workspace name</li>
          <li>workspace name</li>
        </ul>
      </div>
    </div>
  );
};

export default Lobby;

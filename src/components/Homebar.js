import React from "react";
import { Link, useHistory } from "react-router-dom";

const Homebar = () => {
  const history = useHistory();
  return (
    <div className="homebar">
      <button className="material-icons">
        <Link to="/workspace">home</Link>
      </button>
      {/* <button className="material-icons">settings</button> */}
      <ul className="homebar-nav">
        <li>
          <Link to="/workspace/1">workspace name</Link>
        </li>
        <li>
          <Link to="/workspace/2">workspace name</Link>
        </li>
        <li>
          <Link to="/workspace/3">workspace name</Link>
        </li>
        <li>
          <Link to="/workspace/4">workspace name</Link>
        </li>
        <li>
          <Link to="/workspace/5">workspace name</Link>
        </li>
        <li>
          <Link to="/workspace/6">workspace name</Link>
        </li>
      </ul>
      <footer>
        <button className="material-icons">search</button>
        <button
          className="material-icons"
          onClick={() => {
            localStorage.removeItem("username");
            history.push("/");
          }}
        >
          exit_to_app
        </button>
      </footer>
    </div>
  );
};

export default Homebar;

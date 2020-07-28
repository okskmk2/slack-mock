import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="modal-mask"></div>
      <div className="App">
        <Switch>
          <Route
            exact
            to="/"
            render={() => {
              if (localStorage.getItem("username")) {
                return <Home />;
              } else {
                return <Login />;
              }
            }}
          />
          <Route exact to="/login" component={Login} />
          <Route exact to="/workspaces" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

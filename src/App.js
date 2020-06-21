import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Workspace from './components/Workspace';
import Lobby from './components/Lobby';
import WorkspaceSidebar from './components/WorkspaceSidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WorkspaceSidebar />
        <Switch>
          <Route exact path="/workspaces" component={Lobby} />
          <Route path="/workspaces/:workspaceId" component={Workspace} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

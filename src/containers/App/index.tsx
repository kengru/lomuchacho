import React from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "../../components/Menu";
import Profile from "../../components/Profile";
import Home from "../../components/Home";

import "./App.sass";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="columns">
        <div className="column is-one-third">
          <Menu />
        </div>
        <div className="column">
          <Switch>
            <Route path="/profile/:user" component={Profile}/>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from "react-router-dom";
import Profile from "../../components/Profile";
import Home from "../../components/Home";

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/profile/:user" component={Profile}/>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

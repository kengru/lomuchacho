import React from "react";
// import { Switch, Route } from "react-router-dom";
// import Profile from "../../components/Profile";
// import Home from "../../components/Home";

import "./App.sass";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/profile/:user" component={Profile}/>
        <Route path="/" component={Home} />
      </Switch> */}
      <h1 className="title">Bulma</h1>
      <p className="subtitle">
        Modern CSS framework based on{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">
          Flexbox
        </a>
      </p>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Input" />
        </div>
      </div>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="buttons">
        <a className="button is-primary">Primary</a>
        <a className="button is-link">Link</a>
      </div>
    </div>
  );
};

export default App;

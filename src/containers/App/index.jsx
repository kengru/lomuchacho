import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import config from "../../config";
import { load } from "../../helpers/spreadsheet";

import Menu from "../../components/Menu";
import Profile from "../../components/Profile";
import Home from "../../components/Home";

import "./App.sass";

const App = () => {
  const [muchachos, setMuchachos] = useState([]);
  const [error, setError] = useState(null);

  const onLoad = (data, error) => {
    if (data) {
      const muchachos = data.muchachos;
      console.log(muchachos);
      setMuchachos({ muchachos });
    } else {
      console.log(error);
      setError({ error });
    }
  };

  useEffect(() => {
    const initClient = () => {
      window.gapi.client
        .init({
          apiKey: config.apiKey,
          discoveryDocs: config.discoveryDocs
        })
        .then(() => {
          load(onLoad);
        });
    };
    window.gapi.load("client", initClient);
  }, []);

  return (
    <div className="App">
      <div className="columns is-gapless">
        <div className="column is-one-quarter">
          {error ? null : <Menu muchachos={muchachos} />}
        </div>
        <div className="column">
          <Switch>
            <Route path="/profile/:user" component={Profile} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

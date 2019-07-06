import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import config from "../../config";
import { load } from "../../helpers/spreadsheet";

import Menu from "../../components/Menu";
import Profile from "../../components/Profile";
import Home from "../../components/Home";

import "./App.sass";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [muchachos, setMuchachos] = useState([]);

  const onLoad = (data, error) => {
    if (data) {
      const muchachos = data.muchachos;
      const menuItems = muchachos.map(el => {
        const menuItem = {
          username: el.username,
          name: el.name
        };
        return menuItem;
      });
      // console.log(muchachos);
      setMenuItems(menuItems);
      setMuchachos(muchachos);
    } else {
      console.log(error);
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
          <Menu muchachos={menuItems} />
        </div>
        <div className="column">
          <Switch>
            <Route
              path="/profile/:user"
              component={() => <Profile muchachos={muchachos} />}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

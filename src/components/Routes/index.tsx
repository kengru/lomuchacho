import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";

import Home from "../../components/Home";
import Profile from "../../components/Profile";

interface Muchacho {
  userName: string,
  name: string,
  birthday: string,
  photo: string,
  quote: string
};

interface MuchachosProps {
  muchachos: Muchacho[];
}

interface MatchParams {
  user: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

const Routes: React.FC<MuchachosProps> = props => {
  return (
    <Switch>
      <Route
        path="/profile/:user"
        render={({ match }: MatchProps) => (
          <Profile user={match.params.user} muchachos={props.muchachos} />)}
      />
      <Route path="/" component={Home} />
    </Switch>
  )
}

export default Routes;

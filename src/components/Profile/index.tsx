import React, { useState } from "react";

import Spinner from "../UI/Spinner";

interface Muchacho {
  userName: string,
  name: string,
  birthday: string,
  photo: string,
  quote: string
};

interface ProfileProps {
  muchachos: Muchacho[],
  user: string
}

const Profile: React.FC<ProfileProps> = props => {
  const [count, setCount] = useState(0);
  console.log(props);

  return (
    <div onClick={() => setCount(count + 1)}>
      {props.muchachos.length ? props.user : <Spinner />}
    </div>
  );
}

export default Profile;

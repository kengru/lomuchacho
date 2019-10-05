import React, { useState, useEffect } from "react";

import Spinner from "../UI/Spinner";
import ProfilePicture from "./ProfileItems/ProfilePicture";

import emptyM from "./emptyMuchacho"; 

interface Muchacho {
  username: string,
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
  const [user, setUser] = useState<Muchacho>(emptyM);
  
  useEffect(() => {
    const foundUser = props.muchachos.find(muchacho => muchacho.username === props.user) || emptyM;
    setUser(foundUser);
  }, [props.user, props.muchachos])

  return (
    <div>
      {props.muchachos.length ? user.username : <Spinner />}
      <ProfilePicture photo={user.photo} name={user.name}/>
    </div>
  );
}

export default Profile;

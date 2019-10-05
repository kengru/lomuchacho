import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import Spinner from "../UI/Spinner";
import ProfilePicture from "./ProfileItems/ProfilePicture";

import { Muchacho, ProfileProps } from "./ProfileInterfaces";
import emptyM from "./emptyMuchacho";

const SectionStyled = styled.section`
  height: 100%;
  background: #d0d1cd;
  padding: 2rem;
`;

const Profile: React.FC<ProfileProps> = props => {
  const [user, setUser] = useState<Muchacho>(emptyM);

  useEffect(() => {
    const foundUser = props.muchachos.find(muchacho => muchacho.username === props.user) || emptyM;
    setUser(foundUser);
  }, [props.user, props.muchachos])

  return (
    <SectionStyled>
      {/* {props.muchachos.length ? user.username : <Spinner />} */}
      <ProfilePicture photo={user.photo} name={user.name} />
    </SectionStyled>
  );
}

export default Profile;

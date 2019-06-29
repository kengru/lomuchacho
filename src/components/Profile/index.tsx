import React from "react";

interface ProfileProps {
  userName: string
};

const Profile: React.FC<ProfileProps> = props => {
  return (
    <div>{props.userName}</div>
  );
}
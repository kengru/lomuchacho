import React, { useState } from "react";

interface ProfileProps {
  userName: string
};

const Profile: React.FC<ProfileProps> = props => {
  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      {props.userName}, {count}
    </div>
  );
}

export default Profile;
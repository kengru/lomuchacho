import React, { useState } from "react";

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

const Profile: React.FC<MuchachosProps> = (props, { match }) => {
  const [count, setCount] = useState(0);
  console.log(match);

  return (
    <div onClick={() => setCount(count + 1)}>
      kng, {match.params.user}
    </div>
  );
}

export default Profile;

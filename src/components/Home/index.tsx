import React, { useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)}>
      ken, {count}
    </div>
  );
}

export default Home;
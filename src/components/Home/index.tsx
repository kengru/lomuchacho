import React, { useState } from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import "./index.css";

const Home: React.FC = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="home">
      <h1 className="bp3-heading">
        Los Muchachos
      </h1>
      <Button icon="database" large>Eventos</Button>
      <div className="profileList">
        <Card interactive elevation={Elevation.TWO} className="profileCard">
          <div className="Still">
            <img src={`https://firebasestorage.googleapis.com/v0/b/kengru-do.appspot.com/o/losmuchachos%2FDSC_0799%20(2).jpg?alt=media&token=0ee583b5-a3e2-47f2-aa21-86d25f7c7566`} />
          </div>
          <h4>Leudy Lopez</h4>
          <p>Este pana x hace x y luego x klk</p>
        </Card>
        <Card interactive elevation={Elevation.TWO} className="profileCard">
          <div className="Still">
            <img src={`https://firebasestorage.googleapis.com/v0/b/kengru-do.appspot.com/o/losmuchachos%2FDSC_0799%20(2).jpg?alt=media&token=0ee583b5-a3e2-47f2-aa21-86d25f7c7566`} />
          </div>
          <h4>Steven Catalino</h4>
          <p>Este pana x hace x y luego x klk</p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
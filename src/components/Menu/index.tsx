import React from "react";

import MenuItem from "./MenuItem";
import Spinner from "../UI/Spinner";

interface MuchachosMenuItem {
  username: string,
  name: string
}

interface MuchachosItemsProps {
  muchachos: MuchachosMenuItem[]
}

const Menu: React.FC<MuchachosItemsProps> = props => {
  let items = null;
  if (props.muchachos.length) {
    items = props.muchachos.map(item => (
      <MenuItem key={item.username} username={item.username} name={item.name} />
    ));
  }

  return (
    <div className="section">
      <aside className="menu">
        <p className="menu-label">
          Los Muchachos
        </p>
        <ul className="menu-list is-loading">
          {items ? items : <Spinner />}
        </ul>
      </aside>
    </div>
  );
}

export default Menu;
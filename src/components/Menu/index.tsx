import React from "react";

interface MuchachosMenuItem {
  username: string,
  name: string,
}

interface MuchachosItemsProps {
  muchachos: MuchachosMenuItem[]
}

const Menu: React.FC = () => {
  return (
    <div className="section">
      <aside className="menu">
        <p className="menu-label">
          Los Muchachos
        </p>
        {<ul className="menu-list is-loading">
          <li><a href="https://google.com">Kendry</a></li>
          <li><a href="https://google.com">Leudy</a></li>
          <li><a href="https://google.com">Steven</a></li>
        </ul>}
      </aside>
    </div>
  );
}

export default Menu;
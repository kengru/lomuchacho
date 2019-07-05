import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="section">
      <aside className="menu">
        <p className="menu-label">
          Los Muchachos
        </p>
        <ul className="menu-list">
          <li><a href="https://google.com">Kendry</a></li>
          <li><a href="https://google.com">Leudy</a></li>
          <li><a href="https://google.com">Steven</a></li>
        </ul>
      </aside>
    </div>
  );
}

export default Menu;
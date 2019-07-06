import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  username: string;
  name: string;
}

const MenuItem: React.FC<MenuItemProps> = props => {
  return (
    <Link to={`/profile/:${props.username}`}>
      {props.name}
    </Link>
  );
}

export default MenuItem;
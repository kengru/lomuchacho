import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  idx: number;
  name: string;
}

const MenuItem: React.FC<MenuItemProps> = (props, { match }) => {
  return (
    <Link to={`/profile/:${props.idx}`}>
      {props.name}
    </Link>
  );
}

export default MenuItem;
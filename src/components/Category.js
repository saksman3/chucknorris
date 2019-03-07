import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <NavLink className="category" to={`/category/${props.category}`}>
      <div className="category__name">{props.category}</div>
    </NavLink>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            Dem so lan nhan
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/add-item">
            Add Item
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/movie">
            Them movie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

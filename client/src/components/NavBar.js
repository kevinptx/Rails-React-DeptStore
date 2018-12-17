import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBar = () => (
  <Menu>
    <NavLink exact activeStyle={styles.active} to="/">
      <Menu.Item>Home</Menu.Item>
    </NavLink>
    <NavLink exact activeStyle={styles.active} to="/about">
      <Menu.Item>About</Menu.Item>
    </NavLink>
    <NavLink exact activeStyle={styles.active} to="/departments">
      <Menu.Item>Departments</Menu.Item>
    </NavLink>
  </Menu>
);

const styles = {
  active: {
    color: "orange",
    fontWeight: "bold"
  }
};

export default NavBar;

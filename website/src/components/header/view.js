import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import "./style.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="brand">
        <div className="content">
          <img src="images/logo.png" alt="logo" />
          <span>Nick Miller</span>
        </div>
      </div>
      <Menu
        right
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
      >
        <NavLink className="menu-item" to="/" onClick={() => setIsOpen(false)}>
          Startseite
        </NavLink>
        <NavLink
          className="menu-item"
          to="/projekte"
          onClick={() => setIsOpen(false)}
        >
          Projekte
        </NavLink>
        <NavLink
          className="menu-item"
          to="/3d-prints"
          onClick={() => setIsOpen(false)}
        >
          3D-Prints
        </NavLink>
        <NavLink
          className="menu-item"
          to="/ausruestung"
          onClick={() => setIsOpen(false)}
        >
          Ausrüstung
        </NavLink>
        <NavLink
          className="menu-item"
          to="/kontakt"
          onClick={() => setIsOpen(false)}
        >
          Kontakt
        </NavLink>
        <NavLink
          className="menu-item"
          to="/ueber-mich"
          onClick={() => setIsOpen(false)}
        >
          Über Mich
        </NavLink>
      </Menu>
    </div>
  );
};

export default Header;

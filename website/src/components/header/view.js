import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./style.scss";

const Header = () => {
  const { project } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  let headerBackground = {};

  // transparent background on /projekte/:project page
  if (project) {
    headerBackground["backgroundColor"] = "transparent";
  }

  return (
    <div className="header" style={headerBackground}>
      <div className="brand">
        <NavLink to="/">
          <div className="content">
            <img src="/images/logo.png" alt="logo" />
            <span>Nick Miller</span>
          </div>
        </NavLink>
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
      </Menu>
    </div>
  );
};

export default Header;

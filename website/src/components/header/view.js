import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <div className="content">
          <img src="images/logo.png" alt="logo" />
          <span>Nick Miller</span>
        </div>
      </div>
      <Menu right>
        <NavLink className="menu-item" to="/">
          Startseite
        </NavLink>
        <NavLink className="menu-item" to="/projekte">
          Projekte
        </NavLink>
        <NavLink className="menu-item" to="/3d-prints">
          3D-Prints
        </NavLink>
        <NavLink className="menu-item" to="/ausruestung">
          Ausrüstung
        </NavLink>
        <NavLink className="menu-item" to="/kontakt">
          Kontakt
        </NavLink>
        <NavLink className="menu-item" to="/ueber-mich">
          Über Mich
        </NavLink>
      </Menu>
    </div>
  );
};

export default Header;

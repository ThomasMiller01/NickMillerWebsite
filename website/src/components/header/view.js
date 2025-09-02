import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./style.scss";

const Header = () => {
  const { project } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      {!project && (
        <head>
          <title>Nick Miller</title>
        </head>
      )}
      <div className="header">
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
          <NavLink
            className="menu-item"
            to="/"
            onClick={() => setIsOpen(false)}
          >
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
    </React.Fragment>
  );
};

export default Header;

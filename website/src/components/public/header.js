import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header style={headerStyle} className="header">
        <NavBar />
      </header>
    </React.Fragment>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-main">
      <NavLink to="/home" className="nav-link">
        <img src="./images/logo.png" alt="Logo" style={logo} />
      </NavLink>
      <button
        className="navbar-toggler"
        id="navbartogglebtn"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        style={headerButtonStyle}
      >
        <span className="navbar-toggler-icon">
          <i className="fas fa-bars navbar-button"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse" id="navbar">
        <ul
          className="navbar-nav mr-auto mt-2 mt-lg-0 float-right text-right pr-3"
          style={ulListStyle}
        >
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/home" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/projects" className="nav-link">
              Projects <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item" style={liItemStyle}>
            <NavLink to="/about" className="nav-link">
              About Me <span className="sr-only">(current)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Styles
const logo = {
  width: "250px",
  position: "absolute",
  top: 10,
  left: 10,
};

const headerButtonStyle = {
  margin: "2px 0px",
  padding: 0,
};

const headerStyle = {
  width: "100%",
  fontSize: "20px",
  position: "absolute",
  height: "6.5vh",
};

const ulListStyle = { margin: "0 auto" };

const liItemStyle = { margin: "0 15px 0 15px" };

export default Header;

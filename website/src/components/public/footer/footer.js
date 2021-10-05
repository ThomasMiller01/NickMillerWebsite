/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./footer.css";

class Footer extends Component {
  state = { year: "" };

  componentDidMount = () => {
    var currentYear = new Date().getFullYear();
    this.setState({ year: currentYear });
  };

  render() {
    return (
      <footer style={footerStyle} className="footer">
        <div
          className="text-center py-3 footer-div"
          style={divFooterLeftSideStyle}
        >
          <div style={divStyle}>
            Copyright &copy; <span id="yearForCopyright" /> {this.state.year},
            Nick Miller -{" "}
            <NavLink to="/impressum" className="impressum-link">
              Impressum
            </NavLink>
          </div>
        </div>
      </footer>
    );
  }
}

// Styles
const divStyle = {
  margin: "0 auto",
};

const divFooterLeftSideStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const footerStyle = {
  backgroundColor: "#3C210A",
  color: "#DDE0BD",
  height: "6.5vh",
};

export default Footer;

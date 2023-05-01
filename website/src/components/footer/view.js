import { NavLink } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="copyright">© 2023 Nick Miller</div>
        <NavLink to="/impressum">Impressum</NavLink>
      </div>
    </div>
  );
};

export default Footer;

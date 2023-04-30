import { NavLink } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="copyright">© 2023 Nick Miller</div>
        <div className="impressum">
          <NavLink to="/impressum">Impressum</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;

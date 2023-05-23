import { NavLink } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        Instagram: <a href="https://www.instagram.com/gnp_dh/">@gnp_dh</a>
      </div>
      <div className="content">
        <div className="copyright">© 2023 Nick Miller</div>
        <NavLink to="/impressum">Impressum</NavLink>
      </div>
      <a
        href="https://buttercms.com"
        target="_blank"
        rel="noreferrer"
        className="buttercms"
      >
        <img
          src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"
          alt="loading ..."
          style={{ width: "150px" }}
        />
      </a>
    </div>
  );
};

export default Footer;

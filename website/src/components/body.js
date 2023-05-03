import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./header/view";
import Footer from "./footer/view";

const Body = () => {
  const { pathname } = useLocation();

  // auto scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Body;

import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/view";
import Footer from "./footer/view";

const Body = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Body;

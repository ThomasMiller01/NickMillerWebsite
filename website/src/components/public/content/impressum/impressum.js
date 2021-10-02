import React from "react";

import Header from "../../header";
import Footer from "../../footer";
import ContentWrapper from "../content_wrapper";

const Impressum = () => {
  return (
    <React.Fragment>
      <title>Impressum</title>
      <Header />
      <ContentWrapper>
        <h1>Impressum</h1>
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Impressum;

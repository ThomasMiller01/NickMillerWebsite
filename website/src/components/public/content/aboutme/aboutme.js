import React from "react";

import Header from "../../header";
import Footer from "../../footer";
import ContentWrapper from "../content_wrapper";

const a = () => {
  return (
    <React.Fragment>
      <title>AboutMe</title>
      <Header />
      <ContentWrapper>
        <h1>AboutMe</h1>
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default a;

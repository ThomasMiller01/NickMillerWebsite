import React, { Component } from "react";

import "./aboutme.css";

import Other from "../../../other";

import Header from "../../header/header";
import Footer from "../../footer/footer";
import ContentWrapper from "../content_wrapper";
import AboutMeSection from "./aboutme_section";

class AboutMe extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.other = new Other();
  }

  componentDidMount() {
    this.other.getAboutMe().then((aboutme) => {
      this.setState({
        description: aboutme.description,
        sections: aboutme.sections,
        image: aboutme.image,
        headerImage: aboutme.header,
      });
    });
  }

  state = {
    description: "",
    sections: [],
    image: "",
    headerImage: "",
  };

  render() {
    return (
      <React.Fragment>
        <title>AboutMe</title>
        <Header />
        <ContentWrapper>
          <div style={header(this.state.headerImage)}></div>
          <div style={container}>
            <div style={content}>
              <div style={imageContainer}>
                <img
                  src={this.state.image}
                  alt="Profile - Nick Miller"
                  style={image}
                />
              </div>
              <div style={descriptionContainer}>
                <div>{this.state.description}</div>
                <div className="accordion">
                  {this.state.sections.map((section, index) => (
                    <AboutMeSection
                      section={section}
                      index={index}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

const imageContainer = {
  marginLeft: "10%",
  width: "25%",
  height: "100%",
  display: "inline-block",
  verticalAlign: "top",
};

const image = {
  width: "80%",
  borderRadius: "30px",
};

const descriptionContainer = {
  marginRight: "10%",
  width: "55%",
  height: "100%",
  display: "inline-block",
  backgroundColor: "#303036",
  color: "#DDE0BD",
  padding: "15px",
  borderRadius: "10px",
};

const content = {
  width: "100%",
  minHeight: "63.5vh",
  padding: "30px",
};

const header = (headerImage) => {
  return {
    width: "100%",
    height: "30vh",
    backgroundImage: "url('" + headerImage + "')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
  };
};

const container = {
  width: "100%",
  height: "100%",
};

export default AboutMe;

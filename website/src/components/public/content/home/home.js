import React, { Component } from "react";

import "./home.css";

import Header from "../../header/header";
import Footer from "../../footer/footer";
import ContentWrapper from "../content_wrapper";
import Other from "../../../other";

import HomeTop from "./home_top";
import HomeSection from "./home_section";

class Home extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.other = new Other();
  }

  loadProjects = () => {
    let projects = [];
    this.other.getProjects().then((json) => {
      json.forEach((project) => {
        if (project.home) {
          projects.push(project);
        }
      });
      this.setState({ projects });
    });
  };

  componentDidMount() {
    this.loadProjects();
  }

  state = {
    projects: [],
  };

  render() {
    return (
      <React.Fragment>
        <title>Home</title>
        <Header />
        <ContentWrapper>
          <HomeTop />
          {this.state.projects.map((project, index) => (
            <HomeSection
              key={index}
              project={project}
              random={(index + 1).toString()}
              first={index === 0 ? true : false}
            />
          ))}
        </ContentWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;

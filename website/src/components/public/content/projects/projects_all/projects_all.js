import React, { Component } from "react";

import ContentWrapper from "../../content_wrapper";
import Other from "../../../../other";

import ProjectsBackground from "../projects_background";
import ProjectSection from "./project_section";

class ProjectsAll extends Component {
  constructor(props) {
    super();

    this.props = props;

    this.other = new Other();

    this.other.getProjects().then((projects) => {
      this.setState({ projects });
    });
  }

  state = {
    projects: [],
  };

  render() {
    return (
      <React.Fragment>
        <title>All projects</title>
        <ContentWrapper>
          <ProjectsBackground>
            <div style={sectionContainer(this.other.getMobile())}>
              {this.state.projects.map((project, index) => (
                <ProjectSection project={project} />
              ))}
            </div>
          </ProjectsBackground>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

const sectionContainer = (isMobile) => {
  let width = "85%";

  if (isMobile) {
    width = "100%";
  }

  return {
    width: width,
    margin: "5vh auto 0 auto",
  };
};

export default ProjectsAll;

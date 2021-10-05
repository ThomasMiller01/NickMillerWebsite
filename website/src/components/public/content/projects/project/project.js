import React, { Component } from "react";

import ContentWrapper from "../../content_wrapper";
import Other from "../../../../other";

class Project extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.other = new Other();

    let projectName = this.props.match.params.projectName;
    this.getProject(projectName);
  }

  getProject = (title) => {
    this.other.getProjects().then((projects) => {
      let project = null;
      projects.forEach((p) => {
        if (p.title === title) {
          project = p;
        }
      });
      if (project) {
        this.setState({
          title: project.title,
          description: project.description,
          description_big: project.description_big,
          image: project.image,
          color: project.color,
        });
      } else {
        this.props.history.replace("/projects/all");
      }
    });
  };

  state = {
    title: "",
    description: "",
    description_big: "",
    image: "",
    color: "",
  };

  render() {
    return (
      <React.Fragment>
        <title>{this.state.title}</title>
        <ContentWrapper>
          <h1>{this.state.title}</h1>
          <p>{this.state.description_big}</p>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Project;

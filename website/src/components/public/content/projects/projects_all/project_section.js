import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Other from "../../../../other";

class ProjectSection extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.other = new Other();

    if (this.props.project) {
      let project = this.props.project;
      this.state = {
        title: project.title,
        description: project.description,
        image: project.image,
        color: project.color,
      };
    }
  }

  state = {
    title: "",
    description: "",
    image: "",
    color: "",
  };

  render() {
    let rgbColor = this.other.hexToRgb(this.state.color);

    return (
      <div
        style={section(rgbColor, this.other.getMobile())}
        className="project-section"
      >
        <NavLink
          to={{
            pathname: "/projects/" + this.state.title,
          }}
          className="project-section-link"
        >
          <div style={container}>
            <div>
              <img
                src={this.state.image}
                alt={this.state.title}
                style={image}
              />
            </div>
            <div>
              <h1>{this.state.title}</h1>
              <p>{this.state.description}</p>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

const image = {
  width: "50%",
};

const container = {
  width: "100%",
  height: "100%",
  padding: "20px",
};

const section = (backgroundColor, isMobile) => {
  let width = "25vw";
  if (isMobile) {
    width = "90%";
  }

  return {
    margin: "15px",
    padding: 0,
    width: width,
    border: "1px solid #dde0bd",
    display: "inline-block",
    verticalAlign: "top",
    backgroundColor:
      "rgba(" +
      backgroundColor.r +
      ", " +
      backgroundColor.g +
      ", " +
      backgroundColor.b +
      ", 0.6)",
  };
};

export default ProjectSection;

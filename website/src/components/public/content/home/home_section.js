import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Other from "../../../other";

class HomeSection extends Component {
  constructor(props) {
    super();
    this.other = new Other();

    this.props = props;

    this.state = {
      project: this.props.project,
      first: this.props.first,
      random: this.props.random,
    };
  }

  state = {
    project: {
      title: "",
      description: "",
      image: "",
      color: "",
    },
    random: "1",
    first: true,
  };

  render() {
    return (
      <NavLink
        to={{
          pathname: "/projects/" + this.state.project.title,
        }}
        className="project-section-link"
      >
        <div style={section(this.state.first)}>
          {this.getRandom(this.state.random)}
        </div>
      </NavLink>
    );
  }

  getRandom = (rnd) => {
    if (this.other.isMobile) {
      rnd = "2";
    }

    if (rnd === "1") {
      return (
        <div style={section(this.state.first, this.state.project.color)}>
          {this.getText()}
          {this.getImage()}
        </div>
      );
    } else if (rnd === "2") {
      return (
        <div style={section(this.state.first, this.state.project.color)}>
          {this.getImage()}
          {this.getText()}
        </div>
      );
    } else {
      return this.getRandom("1");
    }
  };

  getText = () => {
    let text = {};
    Object.assign(text, textStyle);

    if (this.other.isMobile) {
      text.fontSize = "20px";
      text.width = "100%";
      text.height = "100%";
    }

    return (
      <div style={text}>
        <h1>{this.state.project.title}</h1>
        {this.state.project.description}
      </div>
    );
  };

  getImage = () => {
    let image = {};
    let imageDiv = {};
    let img = {};
    Object.assign(image, imageStyle);
    Object.assign(imageDiv, imageDivStyle);
    Object.assign(img, imgStyle);

    if (this.other.isMobile) {
      imageDiv.display = "none";
      image.width = "100%";
      image.height = "100%";
    }

    return (
      <div style={image}>
        <div style={imageDiv}></div>
        <img
          src={this.state.project.image}
          alt={this.state.project.title}
          style={img}
        />
      </div>
    );
  };
}

let textStyle = {
  width: "70%",
  height: "50vh",
  display: "inline-block",
  verticalAlign: "middle",
  padding: "20px",
  fontSize: "25px",
};

let imageStyle = {
  width: "30%",
  height: "50vh",
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "center",
  padding: "10px",
};

let imageDivStyle = {
  verticalAlign: "middle",
  width: "0",
  height: "100%",
  display: "inline-block",
};

let imgStyle = {
  verticalAlign: "middle",
  width: "100%",
};

const section = (first, backgroundColor) => {
  backgroundColor = "transparent";
  let style = {
    width: "100%",
    minHeight: "50vh",
    backgroundColor: backgroundColor,
    color: "#DDE0BD",
  };
  if (!first) {
    style.marginTop = "15px";
  }
  return style;
};

export default HomeSection;

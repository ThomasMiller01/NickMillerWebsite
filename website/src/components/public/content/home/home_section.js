import React, { Component } from "react";

import Other from "../../../other";

class HomeSection extends Component {
  constructor(props) {
    super();
    this.other = new Other();

    this.props = props;

    this.state = {
      title: this.props.title,
      description: this.props.description,
      image: this.props.image,
      random: this.props.random ? this.props.random : "1",
    };
  }

  state = {
    title: "Title",
    description: "Description",
    image: "",
  };

  render() {
    return (
      <div style={section(this.props.first)}>
        {this.getRandom(this.props.random)}
      </div>
    );
  }

  getRandom = (rnd) => {
    if (this.other.isMobile) {
      rnd = "2";
    }

    if (rnd === "1") {
      return (
        <div style={section(this.props.first, "#5B7553")}>
          {this.getText()}
          {this.getImage()}
        </div>
      );
    } else if (rnd === "2") {
      return (
        <div style={section(this.props.first, "#5B7553")}>
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
        <h1>{this.state.title}</h1>
        {this.state.description}
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
        <img src={this.state.image} alt={this.state.title} style={img} />
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
  let style = {
    width: "100%",
    minHeight: "50vh",
    backgroundColor: backgroundColor,
    color: "#DDE0BD",
  };
  if (!first) {
    style.marginTop = "50px";
  }
  return style;
};

export default HomeSection;

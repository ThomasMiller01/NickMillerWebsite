import React, { Component } from "react";

class ImageSection extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      image: {
        url: this.props.image,
      },
    };
  }

  state = {
    image: {
      url: "url",
    },
  };

  render() {
    return (
      <div style={imageSectionStyle}>
        <img
          src={this.state.image.url}
          alt={this.state.image.url}
          style={imageStyle}
        />
      </div>
    );
  }
}

const imageStyle = {
  maxWidth: "100%",
};

const imageSectionStyle = {
  margin: "10px auto",
  width: "90vw",
};

export default ImageSection;

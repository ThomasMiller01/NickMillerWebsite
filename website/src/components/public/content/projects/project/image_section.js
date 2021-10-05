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
        <img src={this.state.image.url} alt={this.state.image.url} />
      </div>
    );
  }
}

const imageSectionStyle = {
  margin: "10px",
};

export default ImageSection;

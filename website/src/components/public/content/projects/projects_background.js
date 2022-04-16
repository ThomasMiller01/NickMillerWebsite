import React, { Component } from "react";

class ProjectsBackground extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <React.Fragment>
        <div style={backgroundImage}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

const backgroundImage = {
  width: "100%",
  minHeight: "100vh",
  backgroundImage: "url('/images/background/background.png')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: 0,
  padding: "6.5vh 0 0 0",
};

export default ProjectsBackground;

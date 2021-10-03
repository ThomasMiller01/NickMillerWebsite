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
  backgroundImage:
    "url('https://images.pexels.com/photos/5711901/pexels-photo-5711901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: 0,
  padding: "6.5vh 0 0 0",
};

export default ProjectsBackground;

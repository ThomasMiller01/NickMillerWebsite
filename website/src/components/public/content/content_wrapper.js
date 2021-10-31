import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ContentWrapper extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <React.Fragment>
        <div style={wrapper} className="all-projects">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

const wrapper = {
  width: "100%",
  minHeight: "93.5vh",
  backgroundColor: "#2B2D42",
  padding: "0",
  margin: "0",
};

export default withRouter(ContentWrapper);

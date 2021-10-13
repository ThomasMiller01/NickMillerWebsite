import React, { Component } from "react";

class AboutMeSection extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.state = {
      key: this.props.index,
      heading: this.props.section.heading,
      description: this.props.section.description,
      show: this.props.section.show,
    };
  }

  state = {
    key: -1,
    heading: "",
    description: "",
    show: false,
  };

  render() {
    let descriptionClass =
      "accordion-collapse collapse" + (this.state.show ? " show" : "");

    return (
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#am-a-p" + this.state.key.toString()}
          >
            {this.state.heading}
          </button>
        </h2>
        <div
          id={"am-a-p" + this.state.key.toString()}
          className={descriptionClass}
        >
          <div className="accordion-body">{this.state.description}</div>
        </div>
      </div>
    );
  }
}

export default AboutMeSection;

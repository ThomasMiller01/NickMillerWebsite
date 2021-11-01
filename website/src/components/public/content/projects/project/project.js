import React, { Component } from "react";

import ContentWrapper from "../../content_wrapper";
import Other from "../../../../other";

import ImageSection from "./image_section";

class Project extends Component {
  constructor(props) {
    super();
    this.props = props;

    this.other = new Other();
  }

  componentDidMount() {
    this.getProject(this.props.match.params.projectName);
  }

  componentDidUpdate() {
    this.handleScrollAnchor();
  }

  handleScrollAnchor = () => {
    const element = document.getElementById(
      this.props.location.hash.replace("#", "")
    );

    if (element) {
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        });
      }, 100);
    }
  };

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
          images: {
            header: project.images.header,
            images: project.images.images,
          },
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
    images: {
      header: "",
      images: [],
    },
    color: "",
  };

  render() {
    return (
      <React.Fragment>
        <title>{this.state.title}</title>
        <ContentWrapper>
          <div style={headerImage(this.state.images.header)} />
          <div style={titleStyle}>
            <h1>{this.state.title}</h1>
          </div>
          <div style={descriptionWrapperStyle}>
            <div
              style={descriptionStyle}
              dangerouslySetInnerHTML={{ __html: this.state.description_big }}
            />
          </div>
          <div style={imagesStyle}>
            {this.state.images.images.map((image, index) => (
              <ImageSection image={image} key={index} />
            ))}
          </div>
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

const imagesStyle = {
  width: "100%",
  padding: "15px",
};

const titleStyle = {
  width: "100%",
  textAlign: "center",
  margin: "15px 0",
  color: "#DDE0BD",
};

const descriptionWrapperStyle = {
  width: "85%",
  margin: "15px auto",
  color: "#DDE0BD",
};

const descriptionStyle = {
  margin: "0 auto",
  minWidth: "67vw",
};

const headerImage = (header) => {
  return {
    width: "100%",
    height: "30vh",
    backgroundImage: "url('" + header + "')",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    margin: 0,
    padding: 0,
  };
};

export default Project;

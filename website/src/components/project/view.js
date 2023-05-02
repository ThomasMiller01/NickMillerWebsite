import React from "react";
import { useParams } from "react-router-dom";

import useProjectController from "./controller";

import "./style.scss";

const ProjectView = () => {
  const { project: projectSlug } = useParams();

  const { project, parseDate } = useProjectController({ projectSlug });

  return (
    <React.Fragment>
      <head>
        <title>{project.seo.title}</title>
        <meta name="description" content={project.seo.description} />
      </head>
      <div className="project-view">
        <div className="thumbnail">
          <div
            className="image"
            style={{ backgroundImage: `url(${project.image}` }}
          />
          <div className="blur" />
          <div className="content">
            <div className="title">{project.title}</div>
            <div className="date">{parseDate(project.published)}</div>
          </div>
        </div>
        <div className="body">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: project.body }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectView;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

import useProjectController from "./controller";

import "./style.scss";

const ProjectView = () => {
  const { project: projectSlug } = useParams();

  const { project, parseDate } = useProjectController({ projectSlug });

  useEffect(() => {
    document.querySelectorAll("pre[class^='language-']").forEach((pre) => {
      const code = pre.querySelector("code");
      if (code && !code.className) {
        code.className = pre.className; // move class from <pre> → <code>
      }
    });

    hljs.highlightAll();
  }, [project]);

  return (
    <React.Fragment>
      <head>
        <title>{project.seo.title}</title>
        <meta name="description" content={project.seo.description} />
      </head>
      <div className="project-view">
        <div className="thumbnail">
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

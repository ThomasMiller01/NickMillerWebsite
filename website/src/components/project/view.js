import { useParams } from "react-router-dom";

import useProjectController from "./controller";

import "./style.scss";

const ProjectView = () => {
  const { project: projectSlug } = useParams();

  const { project, parseDate } = useProjectController({ projectSlug });

  return (
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
  );
};

export default ProjectView;

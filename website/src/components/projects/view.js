import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";

import "./style.scss";
import useProjectsController from "./controller";

const ProjectsView = () => {
  const { projects } = useProjectsController();

  return (
    <div className="projects-view">
      <div className="title">Meine Projekte</div>
      <div>
        <Box sx={{ flexGrow: 1 }} className="projects">
          <Grid container spacing={5}>
            {projects.map((project, index) => (
              <ProjectView key={index} {...project} />
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

const ProjectView = ({ title, link, image, date }) => {
  return (
    <Grid xs={12} md={6} lg={4} className="project">
      <AspectRatio ratio="1/1">
        <NavLink to={link} className="container">
          {image && (
            <div
              className="image"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
          <div className="text">
            <div className="date">{date}</div>
            <div className="title">{title}</div>
          </div>
        </NavLink>
        <div className="background" />
      </AspectRatio>
    </Grid>
  );
};

export default ProjectsView;

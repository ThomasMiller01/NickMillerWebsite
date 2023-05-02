import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";

import useHomeController from "./controller";

import "./style.scss";

const HomeView = () => {
  const { topProjects } = useHomeController();

  const top3dPrints = [
    {
      title: "Diy-Nightvision-Gear",
      link: "/3d-prints/diy-nightvision-gear",
      date: "13.01.2023",
    },
    {
      title: "M4 VR Gunstock",
      link: "/3d-prints/m4-vr-gunstock",
      date: "20.12.2022",
    },
    {
      title: "ESP8266 Deauther ",
      link: "/3d-prints/3sp8266-deauther",
      date: "26.09.2022",
    },
  ];

  return (
    <div className="home-view">
      <div className="top-section">
        <div className="content">
          <div className="image">
            <img src="images/logo.png" alt="logo" />
          </div>
          <span>Nick Miller</span>
        </div>
      </div>
      <div className="projects-section">
        <div className="links">
          <ButtonView title="Projekte" link="/projekte" />
          <ButtonView title="3D-Prints" link="/3d-prints" />
        </div>
        <div className="top-projects">
          <h2 className="title">Top Projekte</h2>
          <div>
            <Box sx={{ flexGrow: 1 }} className="projects">
              <Grid container spacing={5}>
                {topProjects.map((project, index) => (
                  <TopProjectView key={index} {...project} />
                ))}
              </Grid>
            </Box>
          </div>
        </div>
        <div className="top-3dprints">
          <Stack spacing={6} className="prints">
            {top3dPrints.map((print, index) => (
              <Top3dPrintView key={index} {...print} />
            ))}
          </Stack>
        </div>
      </div>
      <div className="quicklinks-section">
        <div className="links">
          <ButtonView title="Ausrüstung" link="/ausruestung" />
        </div>
      </div>
    </div>
  );
};

const ButtonView = ({ title, link }) => {
  return (
    <NavLink to={link} className="button">
      {title}
    </NavLink>
  );
};

const TopProjectView = ({ title, summary, image, link }) => {
  return (
    <Grid xs={12} md={6} lg={4} className="project">
      <NavLink to={link}>
        <img src={image} alt={title} />
      </NavLink>
      <div className="title">{title}</div>
      <div className="summary">{summary}</div>
    </Grid>
  );
};

const Top3dPrintView = ({ title, link, date }) => {
  return (
    <div className="print">
      <NavLink to={link} className="title">
        {title}
      </NavLink>
      <span>{date}</span>
    </div>
  );
};

export default HomeView;

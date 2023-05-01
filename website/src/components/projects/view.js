import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";

import "./style.scss";

const ProjectsView = () => {
  const projects = [
    {
      title: "DIY-Nightvision-Gear",
      link: "/projekte/diy-nightvision-gear",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000173-5468654689/450/1-8.webp?ph=01a6e5d8d4",
      date: "13.01.2023",
    },
    {
      title: "M4 VR Gunstock",
      link: "/projekte/m4-vr-gunstock",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000199-1ac161ac18/700/1-39.webp?ph=01a6e5d8d4",
      date: "20.12.2022",
    },
    {
      title: "ESP8266 Deauthr",
      link: "/projekte/esp8266-deauthr",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000191-78f9b78f9f/700/1-6.webp?ph=01a6e5d8d4",
      date: "26.09.2022",
    },
    {
      title: "DIY Taschenlampe",
      link: "/projekte/diy-taschenlampe",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000126-eea53eea56/Lamp2.webp?ph=01a6e5d8d4",
      date: "19.09.2022",
    },
    {
      title: "Funkfernbedienung mit Wlan steuern",
      link: "/projekte/funkfernbedienung mit Wlan steuern",
      image: "",
      date: "13.01.2023",
    },
    {
      title: "Servo-Lichtschalter",
      link: "/projekte/servo-lichtschalter",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000127-7b0177b01a/700/2-9.webp?ph=01a6e5d8d4",
      date: "13.01.2023",
    },
    {
      title: "Wetterstation",
      link: "/projekte/wetterstation",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000008-367cc367d0/450/Wetterstation_2022-Jul-21_11-12-44AM-000_CustomizedView1531587654_png.webp?ph=01a6e5d8d4",
      date: "13.01.2023",
    },
  ];

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

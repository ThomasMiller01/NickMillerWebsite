import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Pagination from "@mui/material/Pagination";
import { PaginationItem } from "@mui/material";

import useHomeController from "./controller";

import "./style.scss";

const HomeView = () => {
  const {
    topProjects,
    latestPrints,
    carouselIndex,
    carouselSize,
    topProjectsCount,
    triggerCarouselAnimation,
    parseDate,
    incrementCarousel,
    decrementCarousel,
    setCarouselIndex,
  } = useHomeController();

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
              {carouselIndex !== 0 && (
                <div className="previous">
                  <NavigateBeforeIcon onClick={decrementCarousel} />
                </div>
              )}
              <Grid container spacing={5}>
                {topProjects.map((project) => (
                  <TopProjectView
                    key={project.link}
                    {...project}
                    triggerCarouselAnimation={triggerCarouselAnimation}
                  />
                ))}
              </Grid>
              <Stack spacing={2}>
                <Pagination
                  count={topProjectsCount - carouselSize + 1}
                  page={carouselIndex + 1}
                  hidePrevButton
                  hideNextButton
                  className="pagination"
                  readOnly
                  renderItem={(item) => <PaginationItem {...item} page="" />}
                  onChange={(event, value) => setCarouselIndex(value - 1)}
                  size="small"
                />
              </Stack>
              {carouselIndex !== topProjectsCount - carouselSize && (
                <div className="next">
                  <NavigateNextIcon onClick={incrementCarousel} />
                </div>
              )}
            </Box>
          </div>
        </div>
        <div className="latest-3dprints">
          <Stack spacing={6} className="prints">
            {latestPrints.map((print, index) => (
              <Latest3dPrintView key={index} {...print} parseDate={parseDate} />
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

const TopProjectView = ({
  title,
  summary,
  image,
  link,
  triggerCarouselAnimation,
}) => {
  let className = "project";
  if (triggerCarouselAnimation) {
    className += " image-animation";
  }
  return (
    <Grid xs={12} md={6} lg={4} className={className}>
      <NavLink to={link}>
        <img src={image} alt={title} />
      </NavLink>
      <div className="title">{title}</div>
      <div className="summary">{summary}</div>
    </Grid>
  );
};

const Latest3dPrintView = ({ title, link, date, parseDate }) => {
  return (
    <div className="print">
      <NavLink to={link} className="title">
        {title}
      </NavLink>
      <span>{parseDate(date)}</span>
    </div>
  );
};

export default HomeView;

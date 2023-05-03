import { useEffect, useCallback, useState } from "react";

import useHomeModel from "./model";

const useHomeController = () => {
  const { topProjects, latestPrints, getTopProjects, getLatestPrints } =
    useHomeModel();

  useEffect(() => {
    getTopProjects();
  }, []);

  useEffect(() => {
    getLatestPrints();
  }, []);

  const parseDate = (datestr) => {
    let datetime = new Date(datestr);

    let date = datetime.getDate();
    let month = datetime.getMonth();
    let year = datetime.getFullYear();

    date = date < 10 ? `0${date}` : `${date}`;
    month = month < 10 ? `0${month}` : `${month}`;

    return `${date}.${month}.${year}`;
  };

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselSize, setCarouselSize] = useState(3);
  const [carouselProjects, setCarouselProjects] = useState([]);
  const incrementCarousel = () => {
    setCarouselIndex(carouselIndex + 1);
  };
  const decrementCarousel = () => {
    setCarouselIndex(carouselIndex - 1);
  };
  useEffect(() => {
    let projects = topProjects.slice(
      carouselIndex,
      carouselIndex + carouselSize
    );
    if (projects.length < carouselSize) {
      let missingProjectsCount = carouselSize - projects.length;
      let index = carouselIndex - missingProjectsCount;
      projects = topProjects.slice(index, index + carouselSize);
    }
    setCarouselProjects(projects);
  }, [topProjects, carouselIndex, carouselSize]);

  const handleWindowResize = () => {
    if (window.innerWidth < 900 && carouselSize !== 1) {
      setCarouselSize(1);
    } else if (
      window.innerWidth > 900 &&
      window.innerWidth < 1200 &&
      carouselSize !== 2
    ) {
      setCarouselSize(2);
    } else if (window.innerWidth > 1200 && carouselSize !== 3) {
      setCarouselSize(3);
    }
  };

  useEffect(() => {
    handleWindowResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return {
    topProjects: carouselProjects,
    latestPrints,
    carouselIndex,
    carouselSize,
    topProjectsCount: topProjects.length,
    parseDate,
    incrementCarousel,
    decrementCarousel,
  };
};

export default useHomeController;

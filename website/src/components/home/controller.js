import { useEffect, useState } from "react";

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
    month = month + 1 < 10 ? `0${month + 1}` : `${month + 1}`;

    return `${date}.${month}.${year}`;
  };

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselSize, setCarouselSize] = useState(3);
  const [carouselProjects, setCarouselProjects] = useState([]);
  const [triggerCarouselAnimation, setTriggerCarouselAnimation] =
    useState(true);
  const incrementCarousel = () => {
    setTriggerCarouselAnimation(false);
    setCarouselIndex(carouselIndex + 1);
  };
  const decrementCarousel = () => {
    setTriggerCarouselAnimation(false);
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

  useEffect(() => {
    setTimeout(() => {
      setTriggerCarouselAnimation(true);
    }, 10);
  }, [carouselProjects]);

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
    triggerCarouselAnimation,
    parseDate,
    incrementCarousel,
    decrementCarousel,
    setCarouselIndex,
  };
};

export default useHomeController;

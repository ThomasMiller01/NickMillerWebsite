import { useEffect } from "react";

import useHomeModel from "./model";

const useHomeController = () => {
  const { topProjects, topPrints, getTopProjects, getTopPrints } =
    useHomeModel();

  useEffect(() => {
    getTopProjects();
  }, []);

  useEffect(() => {
    getTopPrints();
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

  return { topProjects, topPrints, parseDate };
};

export default useHomeController;

import { useEffect } from "react";

import useHomeModel from "./model";

const useHomeController = () => {
  const { topProjects, getTopProjects } = useHomeModel();

  useEffect(() => {
    getTopProjects();
  }, []);

  return { topProjects };
};

export default useHomeController;

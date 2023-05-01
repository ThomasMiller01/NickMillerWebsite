import { useEffect } from "react";

import useProjectsModel from "./model";

const useProjectsController = () => {
  const { projects, getProjects } = useProjectsModel();

  useEffect(() => {
    getProjects();
  }, []);

  return { projects };
};

export default useProjectsController;

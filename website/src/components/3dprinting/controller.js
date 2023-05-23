import { useEffect } from "react";

import use3dprintingModel from "./model";

const use3dprintingController = () => {
  const { prints, getPrints } = use3dprintingModel();

  useEffect(() => {
    getPrints();
  }, []);

  return { prints };
};

export default use3dprintingController;

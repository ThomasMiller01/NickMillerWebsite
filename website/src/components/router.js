import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Body from "./body";

import HomeView from "./home/view";
import ProjectsView from "./projects/view";
import ImpressumView from "./impressum/view";
import PrintingView from "./3dprinting/view";

const Router = createBrowserRouter([
  {
    element: <Body />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/projekte",
        element: <ProjectsView />,
      },
      {
        path: "/3d-prints",
        element: <PrintingView />,
      },
      {
        path: "/impressum",
        element: <ImpressumView />,
      },
    ],
  },
]);

export default Router;

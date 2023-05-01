import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Body from "./body";

import HomeView from "./home/view";
import ProjectsView from "./projects/view";
import ImpressumView from "./impressum/view";

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
        path: "/impressum",
        element: <ImpressumView />,
      },
    ],
  },
]);

export default Router;

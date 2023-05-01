import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Body from "./body";

import HomeView from "./home/view";
import ProjectsView from "./projects/view";

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
    ],
  },
]);

export default Router;

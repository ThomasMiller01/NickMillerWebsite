import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Body from "./body";

import HomeView from "./home/view";
import ProjectsView from "./projects/view";
import ImpressumView from "./impressum/view";
import PrintingView from "./3dprinting/view";
import ProjectView from "./project/view";
import EquipmentView from "./equipment/view";

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
        path: "/projekte/:project",
        element: <ProjectView />,
      },
      {
        path: "/3d-prints",
        element: <PrintingView />,
      },
      {
        path: "/ausruestung",
        element: <EquipmentView />,
      },
      {
        path: "/impressum",
        element: <ImpressumView />,
      },
    ],
  },
]);

export default Router;

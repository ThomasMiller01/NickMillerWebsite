import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Body from "./body";
import Home from "./home/view";

const Router = createBrowserRouter([
  {
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;

import { RouterProvider } from "react-router-dom";

import Router from "./components/router";

import "@fontsource/roboto/300.css";
import "@fontsource/fira-sans/300.css";

import "./App.css";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;

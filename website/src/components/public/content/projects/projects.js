import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./projects.css";

import Header from "../../header/header";
import Footer from "../../footer/footer";
import Error from "../../../error";

import ProjectsAll from "./projects_all/projects_all";
import Project from "./project/project";

const Projects = () => {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Redirect exact from="/projects" to="/projects/all" />
        <Route path="/projects/all" component={ProjectsAll} />
        <Route path="/projects/:projectName" component={Project} />
        <Route
          render={() => (
            <Error
              file="Projects.js"
              error_title="Bad Request"
              error_number="404"
              error_description="The server cannot process the request due to something that is perceived to be a client error."
            />
          )}
        />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;

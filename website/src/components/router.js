import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Error from "./error";

import Home from "./public/content/home/home";
import Projects from "./public/content/projects/projects";
import AboutMe from "./public/content/aboutme/aboutme";
import Impressum from "./public/content/impressum/impressum";

const router = ({ history }) => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={AboutMe} />
        <Route path="/impressum" component={Impressum} />
        <Route
          render={() => (
            <Error
              file="App.js"
              error_title="Bad Request"
              error_number="404"
              error_description="The server cannot process the request due to something that is perceived to be a client error."
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default router;

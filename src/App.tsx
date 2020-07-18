import React from "react";
import { Dashboard, Login, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

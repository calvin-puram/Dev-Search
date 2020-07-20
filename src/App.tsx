import React from "react";
import { Dashboard, Login, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='/login' component={Login} />
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

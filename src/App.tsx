import React from "react";
import { Dashboard, Login, Error, AuthWrapper } from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <div>
      <AuthWrapper>
        <Router>
          <Switch>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route path='/login' component={Login} />
            <Route path='*' component={Error} />
          </Switch>
        </Router>
      </AuthWrapper>
    </div>
  );
};

export default App;

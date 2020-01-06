import React from "react";
import LoginRegister from "./pages/LoginRegister.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Authentication from "./components/Authentication.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Authentication exact path="/dashboard">
          <Route exact path="/dashboard" component={Dashboard} />
        </Authentication>
        <Route path="/" component={LoginRegister} />
      </Switch>
    </Router>
  );
};

export default App;

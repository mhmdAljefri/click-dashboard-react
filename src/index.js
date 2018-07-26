import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import indexRoutes from "./routes/index";
import './index.css';

ReactDOM.render(
<Router>
  <Switch>
    {indexRoutes.map((prop, key) => {
      if(prop.authenticated)
        return <Route path={prop.path} component={prop.component} key={key} />;
      return false
    })}
  </Switch>
</Router>, document.getElementById('root'));

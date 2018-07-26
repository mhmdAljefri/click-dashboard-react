import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
// Possible routes fir dashboard
import dashboardRoutes from 'routes/dashboard'
// import Dashboard Components
import Sidebar from "components/Sidebar"

class Dashboard extends Component {
  switchRoutes = () => 
    <Switch>
      {dashboardRoutes.map((route, key) => {
        if (route.redirect) return <Redirect key={key} path={route.path} to={route.to} />
        return <Route key={key} path={route.path} component={route.component}/>
      })}
    </Switch>

  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="App-content">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-container">
            {this.switchRoutes()}
          </div>
          <footer className="App-footer">App footer</footer>
        </div>
      </div>
    );
  }
}

export default Dashboard;

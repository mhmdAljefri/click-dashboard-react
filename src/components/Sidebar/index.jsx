import React from 'react';
import dashboardRoutes from 'routes/dashboard';
import { NavLink } from "react-router-dom";
import logo from "assest/img/logo.png"

export default class Sidebar extends React.Component {
  listRoutes = () =>
    <ul>
      {dashboardRoutes.map((route, key) => { 
        if (route.redirect) return false
        const Icon = route.icon || ""
        return (
          <li key={key}><NavLink to={route.path}>
            <i>{<Icon />}</i>
            <span>{route.sidebarName }</span>
          </NavLink></li>
      )})}
    </ul>

  render () {
    return (
      <div className="App-sidebar">
        <div className="App-logo">
          <img src={logo} alt="name" />
          <a href="dashbiord">
            CLICK DASHBOARD REACT
          </a>
        </div>
        {this.listRoutes()}
      </div>
    );
  };
};

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-sidebar">
          Sidbar
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="App-content">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-container">
            To get started, edit <code>src/App.js</code> and save to reload.
          </div>
          <footer className="App-footer">App footer</footer>
        </div>
      </div>
    );
  }
}

export default App;

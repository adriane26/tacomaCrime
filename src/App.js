import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './components/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tacoma Crime 2014 - 2016</h2>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;

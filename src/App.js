import React, { Component } from 'react';
import './App.css';


import Login from './Component/Login';

class App extends Component {

  render() {
    return (
      <div className="App">
      <h2>Open ID Authentication System</h2>
      <br/>
      <Login/>
      <br/><br/>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu-container">
          <Menu/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import LoginWindow from '../LoginWindow';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <LoginWindow/>
        <Footer/>
      </div>
    );
  }
}

export default App;

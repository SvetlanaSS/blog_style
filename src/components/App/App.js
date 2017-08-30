import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;

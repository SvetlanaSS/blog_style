import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
// import Menu from '../Menu';
import Footer from '../Footer';
import LoginWindow from '../AuthorisationForm';

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

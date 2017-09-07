import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import Header from '../Header';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import LoginWindow from '../AuthorisationForm';

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        {/* <Header/> */}
        { !authenticated ? <Dashboard /> : <LoginWindow/> }
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(App);

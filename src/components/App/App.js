import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Dashboard from '../Dashboard';
import Footer from '../Footer';
import LoginWindow from '../AuthorisationForm';
import Loader from '../Loader';

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <Header/>
        { !authenticated ? <Dashboard /> : <LoginWindow/> }
        <Loader />
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

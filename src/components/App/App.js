import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import LoginWindow from '../AuthorisationForm';
import Loader from '../Loader';
import Menu from '../Menu';
import BlogPostModal from '../BlogPostModal';

class App extends Component {
  render() {
    const { authenticated } = this.props;
    return (
      <div>
        <Header authenticated={ authenticated } />
        { authenticated ? <Menu /> : null }
        { authenticated ? this.props.children : <LoginWindow/> }
        <Loader />
        <BlogPostModal />
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

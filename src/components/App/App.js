import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header';
import Footer from '../Footer';
import LoginWindow from '../AuthorisationForm';
import Loader from '../Loader';
import Menu from '../Menu';
import BlogPostModal from '../BlogPostModal';
import { showModalSearch } from '../../actions/modalSearch';

class App extends Component {
  render() {
    const { authenticated, showModalSearch } = this.props;
    return (
      <div>
        <Header authenticated={ authenticated } showModalSearch={showModalSearch} />
        { authenticated ? <Menu /> : null }
        { authenticated ? this.props.children : <LoginWindow /> }
        <Loader />
        <BlogPostModal />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModalSearch }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

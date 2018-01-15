import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header';
import Footer from '../Footer';
import AuthorisationForm from '../AuthorisationForm';
import Loader from '../Loader';
import Menu from '../Menu';
import BlogPostModal from '../BlogPostModal';
import AddComment from '../CommentAdd';
import { showModalSearch } from '../../actions/modalSearch';
import { forceFetchDataFirebase } from '../../actions/firebaseContent';
import './App.css';

class App extends Component {
  render() {
    const { authenticated, showModalSearch, forceFetchDataFirebase } = this.props;

    return (
      <div>
        <Header authenticated={ authenticated } showModalSearch={showModalSearch} />
        { authenticated ? null : <section className="backgroundImage"></section> }
        { authenticated ? <Menu /> : null }
        { authenticated ? this.props.children : <AuthorisationForm /> }
        <Loader />
        <BlogPostModal />
        <AddComment forceFetchDataFirebase={forceFetchDataFirebase}/>
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
  return bindActionCreators({ showModalSearch, forceFetchDataFirebase }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

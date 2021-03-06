import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header';
import Footer from '../Footer';
import AuthorisationForm from '../AuthorisationForm';
import Loader from '../Loader';
import Menu from '../Menu';
import BlogPostModal from '../BlogPostModal';
import AddComment from '../AddComment';
import { showModalSearch } from '../../actions/modalSearch';
import { forceFetchDataFirebase } from '../../actions/firebaseContent';
import styled from 'styled-components';
import foto from './main_foto.jpg';

const BackgroundImage = styled.section`
    background: ${p => p.auth ? '' : `url(${foto}) no-repeat center center fixed`};
    background-size: cover;
`;

export class App extends Component {
  render() {
    const { authenticated, showModalSearch, forceFetchDataFirebase } = this.props;
    return (
      <BackgroundImage auth={authenticated}>
        <Header authenticated={ authenticated } showModalSearch={showModalSearch} />
        { authenticated ? <Menu /> : null }
        { authenticated ? this.props.children : <AuthorisationForm /> }
        <Loader />
        <BlogPostModal />
        <AddComment forceFetchDataFirebase={forceFetchDataFirebase}/>
        <Footer />
      </BackgroundImage>
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

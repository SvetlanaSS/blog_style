import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FaSearch from 'react-icons/lib/fa/search';
import logo from './logo.png';
import { signOutUser } from '../../actions/auth';

export class Header extends Component {
  render() {
    const { authenticated, showModalSearch, signOutUser } = this.props;

    const HeaderWrapper = styled.div`
      background: #FCFBFB;
      height: 5rem;
      left: 0;
      overflow: auto;
      right: 0;
      top: 0;
      z-index: 999;
      padding-top: 0.7rem;
    `;

    const Logo = styled(Link)`
      margin-left: 1rem;
      margin-top: 0.50rem;
    `;

    const IconContainer = styled.span`
      display: inline-block;
      float: right;
      padding: 0.4rem 1rem;
    `;

    const ButtonContainer = styled.span`
      display: inline-block;
      float: right;
      padding: 0.1rem 1rem;
    `;

    return (
      <HeaderWrapper>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        { authenticated && <ButtonContainer><Button data-test="button" onClick={() =>signOutUser()}>Logout</Button></ButtonContainer> }
        { authenticated && <IconContainer><FaSearch data-test="icon" onClick={() => showModalSearch()} size={25} style={{color: '#635F5F'}} /></IconContainer> }
      </HeaderWrapper>);
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

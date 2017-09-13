import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class Header extends Component {
  render() {
    const HeaderWrapper = styled.div`
      background: #FCFBFB;
      height: 5rem;
      left: 0;
      overflow:auto;
      right: 0;
      top: 0;
      z-index: 999;
    `;

    const Logo = styled(Link)`
      margin-left: 1rem;
      margin-top: 0.50rem;
    `;

    const Search = styled.span`
      display: inline-block;
      float: right;
    `;

    const { authenticated } = this.props;

    return (
      <HeaderWrapper>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        { authenticated && <Search>Icon</Search> }
      </HeaderWrapper>);
  }
}

export default Header;

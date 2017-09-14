import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import logo from './logo.png';
import Search from '../Search';

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
      padding-top: 0.7rem;
    `;

    const Logo = styled(Link)`
      margin-left: 1rem;
      margin-top: 0.50rem;
    `;

    const StyledSearch = styled(Search)`
      display: inline-block;
      float: right;
      padding-top: 0.4rem;
    `;

    const { authenticated } = this.props;

    return (
      <HeaderWrapper>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        { authenticated && <FaSearch size={25} /> }
      </HeaderWrapper>);
  }
}

export default Header;

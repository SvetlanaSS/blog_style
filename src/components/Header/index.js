import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FaSearch from 'react-icons/lib/fa/search';
import logo from './logo.png';

class Header extends Component {
  render() {
    const { authenticated, showModalSearch } = this.props;

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

    const IconContainer = styled.span`
      display: inline-block;
      float: right;
      padding: .4rem 1rem;
    `;

    return (
      <HeaderWrapper>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        { authenticated && <IconContainer><FaSearch onClick={() => showModalSearch()} size={25} style={{color: '#635F5F'}} /></IconContainer> }
      </HeaderWrapper>);
  }
}

export default Header;

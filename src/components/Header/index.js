import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.png';

class Header extends Component {
    render() {
      const HeaderWrapper = styled.div`
      background: #F1F0F0;
      height: 5rem;
      left: 0;
      overflow:auto;
      right: 0;
      top: 0;
      z-index: 999;
      `;

      const Logo = styled.div`
        margin-left: 1rem;
        margin-top: 0.50rem;
      `;

      return (
        <HeaderWrapper>
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        </HeaderWrapper>)
    }
}

export default Header;

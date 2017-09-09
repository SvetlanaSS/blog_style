import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

class Menu extends Component {
  render() {
    const MenuWrapper = styled.menu`
      padding: 0;
      font-size: 0;
      box-sizing: border-box;
      background: lightgrey;
    `;

    const MenuList = styled.li`
      font-size: 1.7rem;
      display: inline-block;
      width: 25%;
      box-sizing: border-box;
      text-align: center;
    `;

    const MenuLink = styled.a`
      color: #000;
      display: block;
      padding: 1.2rem;
      text-decoration: none;
      &:hover {
        color: black;
      }
      &:visited {
        color: black;
      }
    `;

    return (
      <nav>
        <MenuWrapper>
          <MenuList><MenuLink href="#">Fashion</MenuLink></MenuList>
          <MenuList><MenuLink href="#">Beauty</MenuLink></MenuList>
          <MenuList><MenuLink href="#">Fitness</MenuLink></MenuList>
          <MenuList><MenuLink href="#">Lifestyle</MenuLink></MenuList>
        </MenuWrapper>
      </nav>
    );
  }
}

export default Menu;

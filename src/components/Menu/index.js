import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
      width: 33%;
      box-sizing: border-box;
      text-align: center;
    `;

    const MenuLink = styled(NavLink)`
      color: #000;
      display: block;
      padding: 1.2rem;
      &:hover {
        color: black;
        text-decoration: none;
      }
      &:visited {
        color: black;
      }
    `;

    return (
      <nav>
        <MenuWrapper>
          <ul>
            <MenuList><MenuLink to="/fashion">Fashion</MenuLink></MenuList>
            <MenuList><MenuLink to="/beauty">Beauty</MenuLink></MenuList>
            <MenuList><MenuLink to="/fitness">Fitness</MenuLink></MenuList>
            {/* <MenuList><MenuLink to="/lifestyle">Lifestyle</MenuLink></MenuList> */}
          </ul>
        </MenuWrapper>
      </nav>
    );
  }
}

export default Menu;

import React, { Component } from 'react';
import './style.css';

class Menu extends Component {
  render() {
    return (
      <nav>
        <menu className="menu-list">
          <li className="menu-list-item"><a href="#" className="menu-list-link">Fashion</a></li>
          <li className="menu-list-item"><a href="#" className="menu-list-link">Beauty</a></li>
          <li className="menu-list-item"><a href="#" className="menu-list-link">Fitness</a></li>
          <li className="menu-list-item"><a href="#" className="menu-list-link">Lifestyle</a></li>
        </menu>
      </nav>
    );
  }
}

export default Menu;

import React, { Component } from 'react';
import { Link } from 'react-router';

class Logout extends Component {
  render() {
    return (
      <section>
        Logout Page
        <Link to="/"><LoginWindow /></Link>
      </section>
    );
  }
}

export default Logout;

import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class SearchByToday extends Component {
  render() {
    return (
      <section>
        <Checkbox>Today's posts</Checkbox>
      </section>
    );
  }
}

export default SearchByToday;

import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SearchByHashtag extends Component {
  render() {
    return (
      <section>
        <FormControl
          type="text"
          placeholder="Enter hashtag"
        />
      </section>
    );
  }
}

export default SearchByHashtag;

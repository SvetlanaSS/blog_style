import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap';

class SearchByToday extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'unchecked'
    };
  }

  changeCheckboxStatus = () => {
    if (this.state.status) {
      this.setState({ status: 'checked' });
    } else {
      this.setState({ status: 'unchecked' });
    }
  }

  // getTodaysPosts = () => {
  //   if () {
  //
  //   }
  // }

  render() {
    return (
      <section>
        <Checkbox>Today's posts</Checkbox>
      </section>
    );
  }
}

export default SearchByToday;

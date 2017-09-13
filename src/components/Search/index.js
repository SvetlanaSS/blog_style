import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { showModal } from '../../actions/modal';
import { Button } from 'react-bootstrap';


class Search extends Component {
  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    const buttonsInstance = (
      <div style={wellStyles}>
        <Button bsSize="large" block>Click here for search and filter</Button>
      </div>
    );
    return (
      <div>
        {buttonsInstance}
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ showModal }, dispatch);
// }

export default Search;
// connect(null, mapDispatchToProps)(Search);

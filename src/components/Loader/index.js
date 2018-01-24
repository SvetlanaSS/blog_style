import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

export class Loader extends Component {
  render() {
    const { loader } = this.props;
    return loader.showLoader ? <div className="loading"/> : null;
  }
}

function mapStateToProps(state) {
  return {
    loader: state.loader
  };
}

export default connect(mapStateToProps)(Loader);

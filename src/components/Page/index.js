import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDataFirebase } from '../../actions/firebaseContent';
import BlogPost from '../BlogPost';
import { Grid, Row } from 'react-bootstrap';

class Page extends Component {

  componentDidMount() {
    this.props.fetchDataFirebase();
  }

  renderPosts = (data) => {
    if (data.length) {
      const obj = {};
      let i, j, chunk = 4;
      for (i = 0, j = data.length; i < j; i += chunk) {
        obj[i] = data.slice(i, i + chunk);
      }

      return Object.keys(obj).map(key => {
        return (
          <Row key={key} className="show-grid">
            {obj[key].map(post => {
              return <BlogPost key={post.id} post={post} />;
            })}
          </Row>
        );
      });
    }
  }

  render() {
    const { location: { pathname }, fashion, beauty, fitness } = this.props;
    let data;
    if (pathname.includes('fashion')) {
      data = fashion;
    } else if (pathname.includes('beauty')) {
      data = beauty;
    } else {
      data = fitness;
    }
    return (
      <Grid>
        {this.renderPosts(data)}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    fashion: state.firebaseContent.fashion,
    beauty: state.firebaseContent.beauty,
    fitness: state.firebaseContent.fitness,
    error: state.firebaseContent.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDataFirebase }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);

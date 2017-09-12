import React, { Component } from 'react';
import firebase from '../../api/firebase';
import BlogPost from '../BlogPost';
import { Grid, Row } from 'react-bootstrap';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fashion: [],
      beauty: [],
      fitness: []
    };
  }

  componentDidMount() {
    return firebase.database().ref('/fitness/').once('value').then(data => {
      const response = data.val();
      this.setState({
        fitness: response.fitness,
        beauty: response.beauty,
        fashion: response.fashion,
      });
    });
  }

  renderPosts = () => {
    const { fitness } = this.state;
    if (fitness.length) {
      const obj = {};
      let i, j, chunk = 4;
      for (i = 0, j = fitness.length; i < j; i += chunk) {
        obj[i] = fitness.slice(i, i + chunk);
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
    return (
      <Grid>
        {this.renderPosts()}
      </Grid>
    );
  }
}

export default Page;

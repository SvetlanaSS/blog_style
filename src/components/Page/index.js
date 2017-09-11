import React, { Component } from 'react';
import firebase from '../../api/firebase';
import BlogPost from '../BlogPost';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fashion: {},
      beauty: {},
      fitness: {}
    };
  }

  componentDidMount() {
    return firebase.database().ref('/fitness/').once('value').then(data => {
      this.setState({ fitness: data.val() });
    });
  }

  renderPosts = () => {
    const { fitness } = this.state;
    if (Object.keys(fitness).length) {
      return Object.keys(fitness).map((key)  => {
        return <BlogPost key={key} post={fitness[key]} />;
      });
    }
  }

  render() {
    return (
      <section className="columns">
        <div className="column">
          {this.renderPosts()}
        </div>
      </section>
    );
  }
}

export default Page;

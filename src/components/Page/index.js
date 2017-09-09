import React, { Component } from 'react';
import firebase from '../../api/firebase';
import BlogPost from '../BlogPost';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    return firebase.database().ref('/blog_posts/').once('value').then(data => {
      const blogPosts = data.val();
      this.setState({ blogPosts });
    });
  }

  renderBlogpost = (post, i) => {
    return <BlogPost key={i} post={post} />;
  }

  render() {
    const { blogPosts } = this.state;
    return (
      <section>
        {blogPosts.map(this.renderBlogpost)}
      </section>
    );
  }
}


export default Page;

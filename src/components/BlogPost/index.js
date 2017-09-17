import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Heart from '../Heart';
import { showModalPost } from '../../actions/modalPost';
import { Col, Thumbnail } from 'react-bootstrap';

class BlogPost extends Component {
  render() {
    const { post, showModalPost, post: { likes } } = this.props;
    return (
      <div>
        <Col xs={12} sm={6} md={3} >
          <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px', minHeight: '500px', maxHeight: '500px'}}>
            <h4><a style={{color: 'black', cursor: 'pointer'}} onClick={() => showModalPost(post)}>{post.title}</a></h4>
            <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
            <p>{post.description.slice(0, 130) + '...'}</p>
            <p style={{color: 'grey'}}>{post.hashtag}</p>
            <p style={{color: 'grey'}}>{post.likes_count} Likes</p>
            <hr/>
            <Heart postLikes={likes} />
          </Thumbnail>
        </Col>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModalPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogPost);

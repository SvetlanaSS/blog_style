import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModalPost } from '../../actions/modalPost';
import { Col, Thumbnail } from 'react-bootstrap';
import FaHeartO from 'react-icons/lib/fa/heart-o';

class BlogPost extends Component {

  render() {
    const { post, showModalPost } = this.props;
    const thumbnailInstance = (
      <Col xs={12} sm={6} md={3} >
        <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px', minHeight: '500px', maxHeight: '500px'}}>
          <h4><a style={{color: 'black', cursor: 'pointer'}} onClick={() => showModalPost(post)}>{post.title}</a></h4>
          <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
          <p>{post.description.slice(0, 130) + '...'}</p>
          <p style={{color: 'grey'}}>{post.hashtag}</p>
          <p style={{color: 'grey'}}>{post.likes} Likes</p>
          <hr/>
          <FaHeartO style={{color: 'grey'}} />
        </Thumbnail>
      </Col>
    );
    return (
      <div>
        {thumbnailInstance}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModalPost }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogPost);

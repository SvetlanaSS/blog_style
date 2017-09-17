import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forceFetchDataFirebase } from '../../actions/firebaseContent';
import Heart from '../Heart';
import { showModalPost } from '../../actions/modalPost';
import { Col, Thumbnail } from 'react-bootstrap';

class BlogPost extends Component {
  render() {
    const { forceFetchDataFirebase, post, showModalPost, post: { likes } } = this.props;
    return (
      <div>
        <Col xs={12} sm={6} md={3} >
          <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px', minHeight: '500px', maxHeight: '500px'}}>
            <h4><a style={{color: 'black', cursor: 'pointer'}} onClick={() => showModalPost(post)}>{post.title}</a></h4>
            <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
            <p>{post.description.slice(0, 130) + '...'}</p>
            <p style={{color: 'grey'}}>{post.hashtag}</p>
            <p style={{color: 'grey'}}>{Object.keys(post.likes).length} Likes</p>
            <hr/>
            <Heart postLikes={likes} postId={post.id} likesList={post.likes} forceFetchDataFirebase={forceFetchDataFirebase} />
          </Thumbnail>
        </Col>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showModalPost, forceFetchDataFirebase }, dispatch);
}

export default connect(null, mapDispatchToProps)(BlogPost);

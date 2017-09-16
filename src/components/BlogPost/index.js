import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModalPost } from '../../actions/modalPost';
import { Col, Thumbnail } from 'react-bootstrap';
import FaHeart from 'react-icons/lib/fa/heart';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import { readEmailFromLocalStorage } from '../../helpers';

class BlogPost extends Component {
  determineHeartColor = () => {
    const { post: { likes } } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    if (likes.length) {
      return likes.map(element => {
        if (element.email === currentUserEmail) {
          return true;
        }
      });
    }
  }

  render() {
    const { post, showModalPost } = this.props;
    const heartColor = this.determineHeartColor();

    const Heart = styled(FaHeart)`
      color: red;
    `;

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
            { heartColor ? <Heart /> : <FaHeartO /> }
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

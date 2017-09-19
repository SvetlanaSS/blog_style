import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Thumbnail } from 'react-bootstrap';
import { hideModalPost } from '../../actions/modalPost';

class BlogPostModal extends Component {
  renderLikes = () => {
    const { post } = this.props;
    const likes = Object.keys(post.likes).length;
    if (likes === 1 || 0) {
      return (
        <span>{likes} Like</span>
      );
    } else {
      return (
        <span>{likes} Likes</span>
      );
    }
  }

  render() {
    const { post, showModalPost, hideModalPost } = this.props;
    return (
      <Modal show={showModalPost} onHide={() => hideModalPost()} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Thumbnail src={post.image_url} alt="foto" style={{width: '242px', heigth: '200px', margin: '0 auto'}} />
          <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
          <p>{post.description}</p>
          <p style={{color: 'grey'}}>{post.hashtag}</p>

          <div>
            <a style={{color: 'grey', cursor: 'pointer', marginRight: '1rem'}}>
              { Object.keys(post).length ? this.renderLikes() : null }
            </a>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => hideModalPost()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModalPost: state.modalPost.showModalPost,
    post: state.modalPost.post
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModalPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostModal);

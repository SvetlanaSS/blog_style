import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Thumbnail } from 'react-bootstrap';
import { hideModalPost } from '../../actions/modalPost';

export class BlogPostModal extends Component {
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

  renderComments = () => {
    const { post } = this.props;
    const comments = Object.keys(post.comments).length;
    if (comments === 1 || 0) {
      return (
        <span>{comments} Comment</span>
      );
    } else {
      return (
        <span>{comments} Comments</span>
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
          <span style={{color: 'grey', marginRight: '1rem'}}>
            { Object.keys(post).length ? this.renderLikes() : null }
          </span>
          <span style={{color: 'grey', marginRight: '1rem'}}>
            { Object.keys(post).length ? this.renderComments() : null }
          </span>
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

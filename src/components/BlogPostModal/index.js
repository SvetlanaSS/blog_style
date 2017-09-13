import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Thumbnail } from 'react-bootstrap';
import { hideModalPost } from '../../actions/modalPost';

class BlogPostModal extends Component {
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

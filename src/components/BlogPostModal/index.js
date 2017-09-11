import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../../actions/modal';

class BlogPostModal extends Component {
  render() {
    const { post, showModal, hideModal } = this.props;
    return (
      <Modal show={showModal} onHide={() => hideModal()} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
          <p>{post.description}</p>
          <p style={{color: 'grey'}}>{post.hashtag}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => hideModal()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.showModal,
    post: state.modal.post
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostModal);

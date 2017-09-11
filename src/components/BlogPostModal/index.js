import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../../actions/modal';

class BlogPostModal extends Component {
  onHide = () => {
    this.props.hideModal();
  }

  render() {
    console.log(this.props);
    const post = { title: 111, description: 'fjkldshfjksdhkfj', date: 1231, hashtag: 1111 };
    return(
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{post.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{color: 'grey', fontSize: '1rem'}}>Published: {post.date}</p>
          <p>{post.description.slice(0, 130) + '...'}</p>
          <p style={{color: 'grey'}}>{post.hashtag}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.onHide()}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.modal.showModal
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostModal);

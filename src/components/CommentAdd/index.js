import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModalAddComment } from '../../actions/modalAddComment';
// import firebase from '../../api/firebase';

class AddComment extends Component {
  // addComment = () => {
  //   // const { postComments, forceFetchDataFirebase, route } = this.props;
  //
  // }
  render() {
    const { showModalAddComment, hideModalAddComment, comment } = this.props;
    return (
      <section>
        <div className="static-modal">
          <Modal show={showModalAddComment} onHide={() => hideModalAddComment()} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-sm">Add comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                name="comment"
                className={'form-control'}
                placeholder="Add your comment"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button disabled={!(comment)}>Cancel</Button>
              <Button>Add</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModalAddComment: state.modalAddComment.showModalAddComment,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModalAddComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);

// firebase.database().ref("user").push({
//   email: "Email",
//   commets: {
//     "8975298nkfjaslndflka": {    // key
//        comment: "Hej"
//     "kejrgkjsei7": true
//   }
// });

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';
import { hideModalAddComment } from '../../actions/modalAddComment';
import { readEmailFromLocalStorage } from '../../helpers';
import firebase from '../../api/firebase';

export class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { forceFetchDataFirebase, pathname, post, hideModalAddComment } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();

    firebase.database().ref(`${pathname}/${post.id}/comments`).push({
      email: currentUserEmail,
      comment: this.state.comment
    });
    hideModalAddComment();
    forceFetchDataFirebase();
  }

  render() {
    const { showModalAddComment, hideModalAddComment } = this.props;
    return (
      <section>
        <div className="static-modal">
          <Modal show={showModalAddComment} onHide={() => hideModalAddComment()} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-sm">Add comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                data-test="form"
                onSubmit={this.handleSubmit}>
                <div style={{paddingBottom: '1.5rem'}}>
                  <textarea
                    type="text"
                    name="comment"
                    className={'form-control'}
                    placeholder="Add your comment here"
                    onChange={this.handleOnChange}
                  />
                </div>
                <Button type='submit' style={{marginRight: '1rem'}}>Add</Button>
                <Button onClick={() => hideModalAddComment()}>Cancel</Button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModalAddComment: state.modalAddComment.showModalAddComment,
    post: state.modalAddComment.post,
    pathname: state.modalAddComment.pathname,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideModalAddComment }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);

import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddComment extends Component {
  render() {
    return (
      <section>
        <div className="static-modal">
          <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Wrapped Text</h4>
              <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </section>
    );
  }
}

export default AddComment;

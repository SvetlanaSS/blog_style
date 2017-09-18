import React, { Component } from 'react';
import firebase from '../../api/firebase';
import AddComment from './addComment';

class Comment extends Component {
  addComment = () => {
    const { postComments, forceFetchDataFirebase, route } = this.props;

  }
  render() {
    return (
      <section style={{display: 'inline-block'}}>
        <p>
          <a style={{color: 'grey'}}>
            <AddComment />
            Add comment
          </a>
        </p>
      </section>
    );
  }
}

export default Comment;

// firebase.database().ref("user").push({
//   email: "Email",
//   commets: {
//     "8975298nkfjaslndflka": {    // key
//        comment: "Hej"
//     "kejrgkjsei7": true
//   }
// });

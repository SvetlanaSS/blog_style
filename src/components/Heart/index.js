import React, { Component } from 'react';
import FaHeart from 'react-icons/lib/fa/heart';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import styled from 'styled-components';
import { readEmailFromLocalStorage } from '../../helpers';
import firebase from '../../api/firebase';

class Heart extends Component {
  determineHeartColor = () => {
    const { postLikes } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    if (Object.keys(postLikes).length) {
      return Object.keys(postLikes).find(key => {
        return postLikes[key].email === currentUserEmail;
      });
    }
  }

  LikePost = (postId) => {
    const { forceFetchDataFirebase } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    const like = { email: currentUserEmail };
    firebase.database().ref(`/fashion/${postId}/likes`).push(like);
    forceFetchDataFirebase();
  }

  DisLikePost = (postId) => {
    const { forceFetchDataFirebase, likesList } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    let likeKey;
    Object.keys(likesList).find(key => {
      return (likesList[key].email === currentUserEmail) ? likeKey = key : null;
    });
    firebase.database().ref(`/fashion/${postId}/likes/${likeKey}`).remove();
    forceFetchDataFirebase();
  }

  render() {
    const { postId } = this.props;
    const heartColor = this.determineHeartColor();
    const RedHeart = styled(FaHeart)`
      color: red;
    `;

    return (
      <section>
        { heartColor ?
          <RedHeart onClick={() => this.DisLikePost(postId)} /> : <FaHeartO onClick={() => this.LikePost(postId)}/> }
      </section>
    );
  }
}

export default Heart;
// firebase.database().ref(`/fashion/${postId}/likes`).once('value').then(snapshot => {
//   console.log(snapshot.val());
// });

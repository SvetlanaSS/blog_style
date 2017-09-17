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
    const { forceFetchDataFirebase, route } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    const like = { email: currentUserEmail };
    firebase.database().ref(`${route}/${postId}/likes`).push(like);
    forceFetchDataFirebase();
  }

  DisLikePost = (postId) => {
    const { forceFetchDataFirebase, likesList, route } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    let likeKey;
    Object.keys(likesList).find(key => {
      return (likesList[key].email === currentUserEmail) ? likeKey = key : null;
    });
    firebase.database().ref(`${route}/${postId}/likes/${likeKey}`).remove();
    forceFetchDataFirebase();
  }

  render() {
    const { postId } = this.props;
    const heartColor = this.determineHeartColor();
    const RedHeart = styled(FaHeart)`
      color: red;
    `;

    return (
      <section style={{display: 'inline-block', marginRight: '1rem'}}>
        { heartColor ?
          <RedHeart onClick={() => this.DisLikePost(postId)} /> : <FaHeartO onClick={() => this.LikePost(postId)}/> }
      </section>
    );
  }
}

export default Heart;

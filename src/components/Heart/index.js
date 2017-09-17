import React, { Component } from 'react';
import FaHeart from 'react-icons/lib/fa/heart';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import styled from 'styled-components';
import { readEmailFromLocalStorage } from '../../helpers';

class Heart extends Component {
  determineHeartColor = () => {
    const { postLikes } = this.props;
    const currentUserEmail = readEmailFromLocalStorage();
    if (postLikes.length) {
      return postLikes.map(element => {
        if (element.email === currentUserEmail) {
          return true;
        }
      });
    }
  }

  render() {
    const heartColor = this.determineHeartColor();

    const RedHeart = styled(FaHeart)`
      color: red;
    `;

    return (
      <section>
        { heartColor ? <RedHeart /> : <FaHeartO /> }
      </section>
    );
  }
}

export default Heart;

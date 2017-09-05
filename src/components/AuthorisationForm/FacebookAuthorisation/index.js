import React, { Component } from 'react';
import styled from 'styled-components';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';


class FacebookAuthorisation extends Component {
  render() {

    const Text = styled.div `
      margin: 0 auto;
      font-size: 1.7rem;
      text-align: center;
    `;

    const FBIcon = styled.div `
      display: inline-block;
      position: absolute;
      margin: 0.6rem;
      padding-left: 7rem;
    `;

    return (
      <div style={{margin: '0 auto'}}>
        <Text>Discover, like, comment and follow your favorite blogs</Text><hr/>
        <div style={{paddingBottom: '1rem', margin: 'auto'}}>
          <FBIcon><FaFacebookSquare /></FBIcon>
          <input style={{margin: '0 auto'}}
            type="button"
            value="Continue with Facebook"
            className="btn btn-block"
          />
        </div>
        <div style={{paddingBottom: '1rem', textAlign: 'center'}}>Or</div>
      </div>
    );
  }
}

export default FacebookAuthorisation;

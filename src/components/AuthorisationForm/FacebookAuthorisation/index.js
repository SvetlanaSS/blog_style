import React, { Component } from 'react';
import styled from 'styled-components';
// import { Button, ButtonToolbar } from 'react-bootstrap';
// import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';


class FacebookAuthorisation extends Component {
  render() {

    const Text = styled.div `
      margin: 0 auto;
      font-size: 1.7rem;
    `;

    // const FBButton = Text.withComponent('div');

    // react-bootstrap. Button: Continue with Facebook
    // const FacebookButton = (
    //   <ButtonToolbar>
    //     <Button><FaFacebookSquare /> Continue with Facebook</Button>
    //   </ButtonToolbar>
    // );

    return (
      <div style={{margin: '0 auto'}}>
        <Text>Discover, like, comment and follow your favorite blogs</Text><hr/><br/>
        <input style={{margin: '0 auto'}}
          type="button"
          value="Continue with Facebook"
          className="btn"
        />
        {/* <FBButton>{FacebookButton}</FBButton> */}
      </div>
    );
  }
}

export default FacebookAuthorisation;

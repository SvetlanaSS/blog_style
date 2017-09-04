import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookAuthorisation from './FacebookAuthorisation';
import LoginForm from './LoginForm';

class LoginWindow extends Component {
  render() {
    const WindowForm = styled.div`
      width: 40rem;
      height: 35rem;
      background: #FCFBFB;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10rem;
      margin-bottom: 15rem;
    `;


    const BottomDiv = styled.div `
      margin: 0 auto;
      font-size: 1rem;
    `;

    return (
      <WindowForm>
        {/* <WindowWrapper> */}
          <FacebookAuthorisation />
          <LoginForm />
          <BottomDiv>By creating an account, I accept BlogStyle's Terms of Service</BottomDiv>
        {/* </WindowWrapper> */}
      </WindowForm>
    );
  }
}

export default LoginWindow;

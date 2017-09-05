import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookAuthorisation from './FacebookAuthorisation';
import LoginForm from './LoginForm';

class LoginWindow extends Component {
  render() {
    const WindowForm = styled.div`
      width: 40rem;
      height: 40rem;
      background: #FCFBFB;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10rem;
      margin-bottom: 10rem;
    `;

    const WindowWrapper = styled.div`
      padding-left: 3rem;
      padding-right: 3rem;
    `;

    const BottomDiv = styled.div `
      font-size: 1rem;
      padding-top: 2rem;
      text-align: center;
    `;

    return (
      <WindowForm>
        <WindowWrapper>
          <FacebookAuthorisation />
          <LoginForm />
          <BottomDiv>By creating an account, I accept BlogStyle's Terms of Service</BottomDiv>
        </WindowWrapper>
      </WindowForm>
    );
  }
}

export default LoginWindow;

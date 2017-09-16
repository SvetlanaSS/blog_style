import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookAuthorisation from './FacebookAuthorisation';
import LoginForm from './LoginForm';
import Loader from '../Loader';

class AuthorisationForm extends Component {
  render() {
    const WindowForm = styled.div`
      width: 100%;
      padding: 2rem;
      background: #FCFBFB;
      margin: 10rem auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media(min-width: 768px) {
        width: 30%;
      }
    `;

    const BottomDiv = styled.div `
      font-size: 1rem;
      padding-top: 2rem;
      text-align: center;
    `;

    return (
      <WindowForm>
        <FacebookAuthorisation />
        <Loader />
        <LoginForm />
        <BottomDiv>
          By creating an account, I accept BlogStyle's Terms of Service
        </BottomDiv>
      </WindowForm>
    );
  }
}

export default AuthorisationForm;

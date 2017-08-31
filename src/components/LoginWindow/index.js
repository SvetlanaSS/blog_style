import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ButtonToolbar, ControlLabel } from 'react-bootstrap';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';


class LoginWindow extends Component {
  render() {
    const WindowWrapper = styled.div`
      width: 60rem;
      height: 35rem;
      background: #FCFBFB;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10rem;
      margin-bottom: 15rem;
    `;

    const TopDiv = styled.div `
      margin: 0 auto;
      font-size: 1.7rem;
    `;

    const TopDivButton = TopDiv.withComponent('div');

    const MiddleDiv = styled.div `
      height: 200px;
    `;

    const MiddleDivItem = styled.div `
      height: 200px;
      display: inline-block;
      width: 50%;
      padding-left: 5rem;
      padding-top: 2rem;
    `;

    const BottomDiv = styled.div `
      margin: 0 auto;
      font-size: 1rem;
    `;

    // react-bootstrap. Button: Continue with Facebook
    const FacebookButton = (
      <ButtonToolbar>
        <Button><FaFacebookSquare /> Continue with Facebook</Button>
      </ButtonToolbar>
    );

    react-bootstrap. Login form
    const LogIn = (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={4}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={4}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={4}>
            <Button type="submit">
              Log in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );

    // react-bootstrap. Sign up form
    const SignUp = (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          {/* <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col> */}
          <Col sm={4}>
            <FormControl type="name" placeholder="Name" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          {/* <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col> */}
          <Col sm={4}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          {/* <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col> */}
          <Col sm={4}>
            <FormControl type="password" placeholder="Create password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={4}>
            <Button type="submit">
              Sign up
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );



    return (
      <WindowWrapper>
        <TopDiv>Discover, like, comment and follow your favorite blogs</TopDiv><br/>
        <TopDivButton>{FacebookButton}</TopDivButton>
        <MiddleDiv>
          <MiddleDivItem>{LogIn}</MiddleDivItem>
          <MiddleDivItem>{SignUp}</MiddleDivItem>
        </MiddleDiv><br/>
        <BottomDiv>By creating an account, I accept BlogStyle's Terms of Service</BottomDiv>
      </WindowWrapper>
    )
  }
}

export default LoginWindow;

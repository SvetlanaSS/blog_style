import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel } from 'react-bootstrap';

class LoginWindow extends Component {
  render() {
    const WindowWrapper = styled.div`
      width: 60rem;
      height: 35rem;
      background: #F1F0F0;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `;

    // const WindowItem = styled.div`
    //   position: absolute;
    //   top: 50%;
    //   transform: translateY(-50%);
    // `;

    // react-bootstrap
    const formInstance = (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={4}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={4}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={4}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );



    return (
      <WindowWrapper>
        {/* <WindowItem> */}
          {formInstance}
        {/* </WindowItem> */}
      </WindowWrapper>
    )
  }
}

export default LoginWindow;


// class LoginWindow extends Component {
//   render() {
//     const Window = styled.div`
//       width: 40rem;
//       height: 25rem;
//       background: #F1F0F0;
//       margin: 0 auto;
//
//     `;
//
//     return(
//       <Window>
//
//       </Window>
//     )
//   }
// }
//
// export default LoginWindow;

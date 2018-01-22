import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../../actions/auth';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  padding-top: 1rem;
`;

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    emailError: false,
    passwordError: false
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
    this.validateField(e.target.name, e.target.value);
  }

  validateEmail = (inputEmail) => {
    const result = inputEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    if (result) return true;
    else return false;
  };

  validatePassword = (inputPassword) => {
    const result = inputPassword.length;
    if (result >= 6) return true;
    else return false;
  }

  validateField = (fieldName, value) => {
    switch(fieldName) {
    case 'email':
      this.validateEmail(value) ? this.setState({ emailError: false }) : this.setState({ emailError: true });
      break;
    case 'password':
      this.validatePassword(value) ? this.setState({ passwordError: false }) : this.setState({ passwordError: true });
      break;
    default:
      break;
    }
  }

  handleSubmit = (e) => {
    const { email, password, emailError, passwordError } = this.state;
    e.preventDefault();

    if (!emailError && !passwordError) {
      this.props.signInUser(email, password);
    }
  }

  render() {

    const { email, password, emailError, passwordError } = this.state;
    const emailErrorMessage = emailError ? 'hasDanger' : '';
    const passwordErrorMessage = passwordError ? 'hasDanger' : '';

    return (
      <section>
        <form
          data-test="form"
          onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              className={`form-control ${emailErrorMessage}`}
              placeholder="Email"
              onChange={this.handleOnChange}
            />
            { emailError && <div>Email is not valid!</div> }
          </div>
          <Container className="form-group">
            <input
              type="password"
              name="password"
              className={`form-control ${passwordErrorMessage}`}
              placeholder="Password"
              onChange={this.handleOnChange}
            />
            { passwordError && <div>Password is too short!</div> }
          </Container>
          <Container>
            <input
              disabled={!(email && password)}
              type="submit"
              className="btn btn-primary btn-block"
              value="Log in"
            />
          </Container>
          <Container>
            {this.props.message}
          </Container>
        </form>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    message: state.auth.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signInUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

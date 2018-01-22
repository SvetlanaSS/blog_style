import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../../../actions/auth';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  padding-top: 1rem;
`;

const ContainerForOr = styled.div`
  padding-bottom: 1rem;
  text-align: center;
`;

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false
    };
  }

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
      this.props.signUpUser(email, password);
    }
  }

  render() {

    const { name, email, password, emailError, passwordError } = this.state;
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
              name="name"
              className="form-control"
              placeholder="Full name"
              onChange={this.handleOnChange}
            />
          </div>
          <Container>
            <input
              type="text"
              name="email"
              className={`form-control ${emailErrorMessage}`}
              placeholder="Email"
              onChange={this.handleOnChange}
            />
            { emailError && <div>Email is not valid!</div> }
          </Container>
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
              disabled={!(name && email && password)}
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign Up"
            />
          </Container>
          <div style={{textAlign: 'center', paddingTop: '1rem'}}>
            <ContainerForOr>Or</ContainerForOr>
            {this.props.message}
          </div>
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
  return bindActionCreators({ signUpUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

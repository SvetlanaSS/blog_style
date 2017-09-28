import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInUser } from '../../../actions/auth';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import './style.css';

const Container = styled.div`
  padding-top: 1rem;
`;

class LoginForm extends Component {
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

  validateField = (fieldName, value) => {
    switch(fieldName) {
    case 'email':
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? this.setState({ emailError: false }) : this.setState({ emailError: true });
      break;
    case 'password':
      value.length >= 6 ? this.setState({ passwordError: false }) : this.setState({ passwordError: true });
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
        <form onSubmit={this.handleSubmit}>
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
              className="btn btn-block"
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

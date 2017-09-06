import React, { Component } from 'react';
import firebase from '../../../api/firebase';
import './style.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      errorMessageFirebase: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name] : e.target.value });
    this.validateField(e.target.name, e.target.value);
  }

  validateField(fieldName, value){
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

  handleSubmit(e) {
    const { email, password, emailError, passwordError } = this.state;
    e.preventDefault();

    if (!emailError && !passwordError) {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
        this.setState({ errorMessageFirebase: error.message });
      });
    }
  }

  render() {
    const { email, password, errorMessageFirebase, emailError, passwordError } = this.state;
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
          <div style={{paddingTop: '1rem'}} className="form-group">
            <input
              type="password"
              name="password"
              className={`form-control ${passwordErrorMessage}`}
              placeholder="Password"
              onChange={this.handleOnChange}
            />
            { passwordError && <div>Password is too short!</div> }
          </div>
          <div style={{paddingTop: '1rem'}}>
            <input
              disabled={!(email && password)}
              type="submit"
              className="btn btn-block"
              value="Log in"
            />
          </div>
          <div>
            {errorMessageFirebase}
          </div>
        </form>
      </section>
    );
  }
}

export default LoginForm;

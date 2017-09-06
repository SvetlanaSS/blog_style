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
  }

  handleOnChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  // validateField(fieldName, value) {
  //   let emailValid = this.state.emailValid;
  //   let passwordValid = this.state.passwordValid;
  //
  //   if(this.state.username && this.state.password) {
  //     this.setState( {error: false} )
  //   } else {
  //     this.setState( {error: true} )
  //   }
  //   }
  // }

  handleSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      this.setState({ errorMessageFirebase: error.message });
    });
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

import React, { Component } from 'react';
import firebase from '../../../api/firebase';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={this.handleOnChange}
            />
          </div>
          <div style={{paddingTop: '1rem'}}>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.handleOnChange}
            />
          </div>
          <div style={{paddingTop: '1rem'}}>
            <input
              type="submit"
              className="btn btn-block"
              value="Log in"
            />
          </div>
          <div>
            {this.state.errorMessage}
          </div>
        </form>
      </section>
    );
  }
}

export default LoginForm;

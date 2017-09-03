import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={this.handleOnChange}
          />
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Password"
            onChange={this.handleOnChange}
          />
          <input
            type="submit"
            className="btn"
            value="Log in"
          />
        </form>
      </section>
    );
  }
}

export default LoginForm;



  // const MiddleDiv = styled.div `
  //   height: 200px;
  // `;
  //
  // const MiddleDivItem = styled.div `
  //   height: 200px;
  //   display: inline-block;
  //   width: 50%;
  //   padding-left: 5rem;
  //   padding-top: 2rem;
  // `;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import { signInWithFacebook } from '../../../actions/auth';

class FacebookAuthorisation extends Component {
  render() {
    const Text = styled.div `
      margin: 0 auto;
      font-size: 1.7rem;
      text-align: center;
    `;

    const FBIcon = styled.div `
      display: inline-block;
      position: absolute;
      margin: 0.6rem;
      padding-left: 7rem;
    `;

    const Button = styled.button`
      margin: 0 auto;
    `;

    const Container = Button.withComponent('div');

    const ButtonContainer = styled.div`
      padding-bottom: 1rem;
      margin: 0 auto;
    `;

    const ContainerForOr = styled.div`
      padding-bottom: 1rem;
      text-align: center;
    `;

    return (
      <Container>
        <Text>Discover, like, comment and follow your favorite blogs</Text><hr/>
        <ButtonContainer>
          <FBIcon><FaFacebookSquare /></FBIcon>
          <Button
            type="button"
            className="btn btn-block"
            onClick={this.props.signInWithFacebook}
          >
            Continue with Facebook
          </Button>
        </ButtonContainer>
        <ContainerForOr>Or</ContainerForOr>
      </Container>
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
  return bindActionCreators({ signInWithFacebook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookAuthorisation);

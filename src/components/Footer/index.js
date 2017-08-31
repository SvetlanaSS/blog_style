import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    const Footer = styled.footer `
      background: #FCFBFB;
      color: #000;
      text-align: center;
      padding: 1rem;
      width: 100%;
      bottom: 0;
      left: 0;
    `;

    const FooterPart = styled.div `
      width: 25%;
      display: inline-block;
    `;

    const FooterHeader = styled.p `
      font-size: 1.4rem;
      color: #505050;
      box-sizing: border-box;
      list-style: none;
    `;

    const Value = styled.li`
      font-size: 1.2rem;
      color: #888787;
      box-sizing: border-box;
      list-style: none;
    `;

    const Media = styled.a `
      color: #888787;
      text-decoration: none;
    `;

    return (
      <Footer>
        <FooterPart>
          <FooterHeader>Explore</FooterHeader>
          <Value>Fashion</Value>
          <Value>Beauty</Value>
          <Value>Fitness</Value>
          <Value>Livestyle</Value>
        </FooterPart>
        <FooterPart>
          <FooterHeader>Contact</FooterHeader>
          <Value>Tomtebodavägen</Value>
          <Value>Solna</Value>
          <Value>Sweden</Value>
        </FooterPart>
        <FooterPart>
          <FooterHeader>About</FooterHeader>
          <Value>About us</Value>
          <Value>Jobs</Value>
          <Value>Blog</Value>
          <Value>Terms of Service</Value>
        </FooterPart>
        <FooterPart>
          <FooterHeader>Social media</FooterHeader>
          <Value><Media href="https://www.facebook.com/">Facebook</Media></Value>
          <Value><Media href="https://www.instagram.com">Instagram</Media></Value>
          <Value><Media href="https://twitter.com">Twitter</Media></Value>
          <Value><Media href="https://www.pinterest.com/">Pinterest</Media></Value>
        </FooterPart>
      </Footer>
    );
  }
}

export default Footer;

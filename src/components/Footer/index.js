import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    const Footer = styled.footer `
      background: lightgrey;
      color: #000;
      text-align: center;
      padding: 5px;
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    `;

    const FooterPart = styled.div `
      width: 50%;
      display: inline-block;
      text-align: center;
    `;

    const FooterHeader = styled.p `
      font-size: 16px;
      box-sizing: border-box;
      text-align: center;
      list-style: none;
    `;

    const Value = FooterHeader.withComponent('li');

    const Media = styled.a `
      color: #000;
      text-decoration: none;
    `;

    return (
      <Footer>
        <FooterPart>
          <FooterHeader>Contact</FooterHeader>
          <Value>Tomtebodavägen</Value>
          <Value>Solna</Value>
          <Value>Sweden</Value>
        </FooterPart>
        <FooterPart>
          <FooterHeader>Social media</FooterHeader>
          <Value><Media href="#">Facebook</Media></Value>
          <Value><Media href="#">Instagram</Media></Value>
          <Value><Media href="#">Twitter</Media></Value>
        </FooterPart>
      </Footer>
    );
  }
}

export default Footer;

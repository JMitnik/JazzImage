import React from 'react';
import FooterStyles from './Footer.style';
import CameraIcon from '../../images/icons/camera-icon.svg';
import Logo from '../Logo';
import Container from '../Container';

const Footer = () => (
  <FooterStyles>
    <Container>
      <Logo />
    </Container>
  </FooterStyles>
);

Footer.propTypes = {};

export default Footer;

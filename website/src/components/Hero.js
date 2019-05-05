import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CameraIcon from '../images/camera-bordered.svg';

const HeroStyles = styled.section`
  min-height: 100vh;
`;

const Hero = props => (
  <HeroStyles>
    <CameraIcon />
  </HeroStyles>
);

Hero.propTypes = {};

export default Hero;

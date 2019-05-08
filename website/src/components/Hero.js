import React from 'react';
import styled from 'styled-components';
// import CameraIcon from '../images/camera-bordered.svg';
import HeroBG from '../images/hero-bg.jpg';

const HeroStyles = styled.section`
  min-height: 100vh;
  background-image: url(${HeroBG});
  background-position: center right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 24px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  padding-bottom: 12px;
  border-bottom: 3px solid #444;
  position: absolute;
  right: 24px;
`;

const Hero = () => (
  <HeroStyles>
    <Heading>JazzImage</Heading>
  </HeroStyles>
);

export default Hero;

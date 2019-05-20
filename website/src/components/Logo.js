import React from 'react';
import IconCamera from '../images/icons/icon-camera.svg';
import styled from 'styled-components';

const LogoStyles = styled.span`
  display: flex;
  width: auto;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Merriweather', serif;

  h1,
  h2,
  h3 {
    font-family: 'Merriweather', serif;
    margin-bottom: 0;
  }

  svg {
    width: 80px;
    min-width: 10%;
    margin-right: 24px;
    border: 8px solid ${props => props.theme.textColor};
    padding: 2px;
  }
`;

const Logo = () => (
  <LogoStyles>
    <IconCamera />
    <h1>JazzImage</h1>
  </LogoStyles>
);
export default Logo;

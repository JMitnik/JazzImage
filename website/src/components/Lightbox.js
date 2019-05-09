import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Lightbox = ({ currentImage, nextImage, prevImage, cancel }) => {
  if (!currentImage) return null;

  return (
    <LightboxStyles onClick={cancel}>
      <img
        onClick={e => e.stopPropagation()}
        src={`http://localhost:1337/${currentImage.url}`}
      />
    </LightboxStyles>
  );
};

const LightboxStyles = styled.div`
  display: block;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Lightbox.propTypes = {};

export default Lightbox;

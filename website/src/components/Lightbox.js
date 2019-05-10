import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Lightbox = ({ currentImage, nextImage, prevImage, cancel }) => {
  if (!currentImage) return null;

  return (
    <LightboxStyles onClick={cancel}>
      <div className="controls">
        <a
          className="prev"
          onClick={e => {
            e.stopPropagation();
            prevImage();
          }}
        >
          Prev
        </a>
        <a
          className="next"
          onClick={e => {
            e.stopPropagation();
            nextImage();
          }}
        >
          Next
        </a>
      </div>
      <div className="inner">
        <img
          onClick={e => e.stopPropagation()}
          src={`http://localhost:1337/${currentImage.url}`}
        />
      </div>
    </LightboxStyles>
  );
};

Lightbox.propTypes = {
  currentImage: PropTypes.object,
  nextImage: PropTypes.func.isRequired,
  prevImage: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired
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

  .controls {
    position: absolute;
    inset: 0px;

    .prev,
    .next {
      position: absolute;
      color: white;
      text-transform: none;
      top: 50%;
      transform: translateY(-50%);
    }

    .prev {
      left: 24px;
    }

    .next {
      right: 24px;
    }
  }

  .inner {
    max-width: 70%;
    max-height: 100%;

    img {
      max-width: 100%;
    }
  }
`;

Lightbox.propTypes = {};

export default Lightbox;

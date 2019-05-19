import React from 'react';
import Img from 'gatsby-image';
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
      <div className="inner" onClick={e => e.stopPropagation()}>
        <Img fluid={currentImage.localFile.childImageSharp.full} />
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
  left: 0px;
  right: 0px;
  bottom: 0px;
  top: 0px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;

  .controls {
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;

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
    width: 70%;
    margin: 0 auto;
    height: 70%;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

Lightbox.propTypes = {};

export default Lightbox;

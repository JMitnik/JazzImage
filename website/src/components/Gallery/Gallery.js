import React from 'react';
import PropTypes from 'prop-types';
import useLightbox from '../../hooks/use-lightbox';
import Lightbox from '../Lightbox';
import GalleryStyles from './Gallery.style';
import Img from 'gatsby-image';

const Gallery = ({ photos }) => {
  const { currentImage, setImage, nextImage, cancel, prevImage } = useLightbox(
    photos
  );

  return (
    <div style={{ width: '100%' }}>
      <Lightbox
        currentImage={currentImage}
        nextImage={nextImage}
        cancel={cancel}
        prevImage={prevImage}
      />
      <GalleryStyles>
        {photos.map((photo, index) => (
          <a
            key={photo.id}
            className="image-wrapper"
            onClick={() => setImage(index)}
          >
            <Img fluid={photo.localFile.childImageSharp.thumbnail} />
          </a>
        ))}
      </GalleryStyles>
    </div>
  );
};

Gallery.propTypes = {
  photos: PropTypes.array
};

export default Gallery;

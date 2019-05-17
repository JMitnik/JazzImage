import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import AlbumGalleryStyles, { Album } from './AlbumGallery.style';

const AlbumGallery = ({ albums }) => (
  <div className="content">
    <h1>Albums</h1>

    <AlbumGalleryStyles>
      {albums.map((album, index) => (
        <Album key={index}>
          <Link to={`/albums/${album.id}`} style={{ textDecoration: 'none' }}>
            <div className="image-container">
              <Img fluid={album.coverPhoto.childImageSharp.fluid} />
            </div>
            <div className="body">
              <h4 className="title">{album.Title}</h4>
            </div>
          </Link>
        </Album>
      ))}
    </AlbumGalleryStyles>
  </div>
);

AlbumGallery.propTypes = {
  albums: PropTypes.array
};

export default AlbumGallery;

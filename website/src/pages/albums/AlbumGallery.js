import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const AlbumGalleryStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

const Album = styled.div`
  display: block;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    opacity: 0;
    visibility: hidden;
    inset: 0px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    transition: all 0.1s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(5%);
    overflow: hidden;

    h4 {
      color: white;
      font-size: 2rem;
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
      transform: translateY(0);
      overflow: hidden;
      visibility: visible;
      cursor: pointer;
      transition: all 0.1s ease-in;
    }
  }
`;

const AlbumGallery = ({ albums }) => (
  <div className="content">
    <h1>Albums</h1>

    <AlbumGalleryStyles>
      {albums.map((album, index) => (
        <Album key={index}>
          <Link to={`/albums/${album.id}`}>
            <Img fluid={album.coverPhoto.childImageSharp.fluid} />
            <div className="overlay">
              <h4>{album.Title}</h4>
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
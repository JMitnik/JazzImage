import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AlbumGallery from '../components/AlbumGallery';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lightbox from '../components/Lightbox';
import useLightbox from '../hooks/use-lightbox';

const AlbumPage = ({ data }) => {
  const album = data.allStrapiAlbum.nodes[0];

  const { currentImage, setImage, nextImage, cancel, prevImage } = useLightbox(
    album.photos
  );

  return (
    <Layout>
      <Lightbox
        currentImage={currentImage}
        nextImage={nextImage}
        cancel={cancel}
        prevImage={prevImage}
      />
      <AlbumHeader>
        <div className="content">
          <button>
            <Link to="/albums">Go back</Link>
          </button>
          <h2>{album.Title}</h2>
        </div>
        <Img fluid={album.coverPhoto.childImageSharp.fluid} />
      </AlbumHeader>
      <AlbumStyles>
        {album.photos.map((photo, index) => (
          <a key={photo.id} className="image-wrapper">
            <img
              onClick={() => setImage(index)}
              src={`http://localhost:1337/${photo.url}`}
            />
          </a>
        ))}
      </AlbumStyles>
    </Layout>
  );
};

AlbumPage.propTypes = {
  id: PropTypes.number
};

const AlbumHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 600px;
  padding-left: 24px;

  h2 {
    margin-top: 100px;
    font-size: 2rem;
  }
`;

const AlbumStyles = styled.div`
  display: grid;
  background: #f1f1f1;
  padding: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  .image-wrapper {
    display: block;
    max-width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default AlbumPage;
export const query = graphql`
  query GetPhotos($id: String) {
    allStrapiAlbum(filter: { id: { eq: $id } }) {
      nodes {
        id
        Title
        createdAt
        photos {
          id
          url
        }
        coverPhoto {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 900) {
              tracedSVG
              srcSet
            }
          }
        }
      }
    }
  }
`;

import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';
import ArrowLeft from '../images/icons/arrow-left-circle.svg';
import SEO from '../components/Seo';
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
          <Button>
            <Link to="/albums">
              <ArrowLeft />
              Go back
            </Link>
          </Button>
          <h2>{album.Title}</h2>
        </div>
        <Img fluid={album.coverPhoto.childImageSharp.fluid} />
      </AlbumHeader>
      <AlbumStyles>
        {album.photos.map((photo, index) => (
          <a
            key={photo.id}
            className="image-wrapper"
            onClick={() => setImage(index)}
          >
            <Img fluid={photo.localFile.childImageSharp.thumbnail} />
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

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;

  @media (min-width: 700px) {
    padding: 100px;
  }

  @media (max-width: 700px) {
    padding: 12px;
  }
  .image-wrapper {
    display: block;
    max-width: 100%;
    box-shadow: none;

    &:hover {
      cursor: pointer;
      transition: all 2s ease-in;
      box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0;
    }
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
          localFile {
            childImageSharp {
              thumbnail: fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
              full: fluid {
                ...GatsbyImageSharpFluid
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        coverPhoto {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

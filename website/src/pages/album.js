import React, { useEffect, useState } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../components/Button/Button';
import Layout from '../components/Layout/Layout';
import Gallery from '../components/Gallery';
import ArrowLeft from '../images/icons/arrow-left-circle.svg';
import SEO from '../components/Seo';
import Container from '../components/Container';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Lightbox from '../components/Lightbox';
import useLightbox from '../hooks/use-lightbox';

const AlbumPage = ({ data }) => {
  const album = data.allStrapiAlbum.nodes[0];

  return (
    <Layout>
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
      <Container>
        <Gallery photos={album.photos} />
      </Container>
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

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import AlbumGallery from './albums/AlbumGallery';
import Headerbar from '../components/Headerbar';
import Container from '../components/Container';

const AlbumGalleryPage = ({ data }) => {
  let albums = [];

  if (data.allStrapiAlbum) {
    albums = data.allStrapiAlbum.nodes;
  }

  return (
    <Layout>
      <Headerbar />
      <Container>
        <AlbumGallery albums={albums} />
      </Container>
    </Layout>
  );
};

export default AlbumGalleryPage;
export const query = graphql`
  query {
    allStrapiAlbum {
      nodes {
        id
        Title
        coverPhoto {
          childImageSharp {
            original {
              width
              src
            }
            fluid(maxWidth: 750, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import AlbumGallery from './albums/AlbumGallery';

const AlbumGalleryPage = ({ data }) => {
  let albums = [];

  if (data.allStrapiAlbum) {
    albums = data.allStrapiAlbum.nodes;
  }

  return (
    <Layout>
      <AlbumGallery albums={albums} />
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

import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Container from '../components/Container';
import Hero from './home/Hero';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import About from './home/About';
import Gallery from '../components/Gallery';
import styled from 'styled-components';

const HomeGallery = styled.section`
  background: #f1f5f8;

  .page-headers {
    padding-top: 24px;

    h3,
    h4 {
      text-align: right;
      color: #8795a1;
    }

    a {
      text-decoration: none;
      color: #1c3d5a;
      font-weight: 1000;
    }

    h4 {
      font-size: 1.2rem;
    }

    h3 {
      color: #606f7b;
      text-align: right;
      font-size: 3rem;
      padding: 24px 0;
    }
  }
`;

const IndexPage = ({ data }) => {
  const homePage = data.allStrapiHomepage.nodes[0];
  const headerPhotos = homePage.headerImages;
  const gallery = homePage.album;

  const about = data.allStrapiAbout.nodes[0];

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          'Doka',
          'Dark room',
          'Jazz',
          'Photos',
          'JazzImage',
          'Arkady Mitnik'
        ]}
      />
      <Hero photos={headerPhotos} />
      <HomeGallery>
        <Container>
          <div className="page-headers">
            <h3>Gallery</h3>
            <h4>
              A slice of my favourite photos. For more of my albums and photos,
              click <Link to="/albums">here</Link>.
            </h4>
          </div>
          <Gallery photos={gallery.photos} />
        </Container>
      </HomeGallery>
      <About data={about} />
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query {
    allStrapiHomepage {
      nodes {
        headerImages {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        album {
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
              }
            }
          }
        }
      }
    }
    allStrapiAbout {
      nodes {
        introduction
        portrait {
          childImageSharp {
            fixed(width: 392, height: 374) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

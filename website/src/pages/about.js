import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Headerbar from '../components/Headerbar';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo';
import styled from 'styled-components';

const AboutPageStyles = styled.section`
  background: ${props => props.theme.colors.primary};
  min-height: 90vh;
  color: ${props => props.theme.colors.primaryText};

  h1,
  h2,
  h3 {
    width: 100%;
  }

  .content {
    white-space: pre-line;
    max-width: 70%;
    padding: 0;
  }
`;

const AboutPage = ({ data }) => (
  <Layout>
    <SEO
      title="About Arkady"
      keywords={[
        'Jazz Photographer',
        'Dark room',
        'Arkady Mitnik',
        'Photos',
        'JazzImage',
        'Arkady Mitnik'
      ]}
    />
    <AboutPageStyles>
      <Headerbar />
      <Container>
        <h1>About Arkady Mitnik</h1>
        <p className="content">{data.allStrapiAbout.nodes[0].fullText}</p>
      </Container>
    </AboutPageStyles>
  </Layout>
);

export default AboutPage;
export const query = graphql`
  query {
    allStrapiAbout {
      nodes {
        introduction
        fullText
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

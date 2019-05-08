import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, *, html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <GlobalStyles />
    <Link to="/albums/">Go to albums</Link>
  </Layout>
);

export default IndexPage;

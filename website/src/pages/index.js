import React from 'react';
import { Link } from 'gatsby';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />
    <Link to="/albums/">Go to albums</Link>
  </Layout>
);

export default IndexPage;

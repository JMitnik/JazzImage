import React from 'react';
import { Link } from 'gatsby';

import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import About from '../components/About';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />
    <About />
  </Layout>
);

export default IndexPage;

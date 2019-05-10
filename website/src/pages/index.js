import React from 'react';
import { Link } from 'gatsby';

import Hero from './home/Hero';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import About from './home/About';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Hero />
    <About />
  </Layout>
);

export default IndexPage;

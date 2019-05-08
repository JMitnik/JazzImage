import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AlbumGallery from '../components/AlbumGallery';
import PropTypes from 'prop-types';

// Use GraphQL to get all the images here

const AlbumPage = ({ children, pageContext }) => {
  const Dog = '1';

  return (
    <Layout>
      <div>{pageContext.id}</div>
    </Layout>
  );
};

AlbumPage.propTypes = {
  id: PropTypes.number
};

export default AlbumPage;

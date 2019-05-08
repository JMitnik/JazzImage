import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AlbumGallery from '../components/AlbumGallery';

// TODO: Import this from graphQL
const ALBUMS = [
  {
    id: 1,
    title: 'Solitude',
    url:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'
  },
  {
    id: 2,
    title: 'Polish concerts',
    url:
      'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  }
];

const AlbumGalleryPage = () => (
  <Layout>
    <AlbumGallery albums={ALBUMS} />
  </Layout>
);

export default AlbumGalleryPage;
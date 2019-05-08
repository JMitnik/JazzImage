import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './Sidebar';
import Hero from './Hero';
import styled from 'styled-components';

const LayoutStyles = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutStyles>
        <Sidebar />

        <div>
          <main>{children}</main>
          <footer>Test</footer>
        </div>
      </LayoutStyles>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

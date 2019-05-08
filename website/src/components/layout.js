import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from './Sidebar';
import Hero from './Hero';
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, *, html {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

const LayoutStyles = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  /* grid-gap: 30px; */
  overflow: hidden;
`;

const Layout = ({ children }) => (
  <div>
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
            <footer />
          </div>
        </LayoutStyles>
      )}
    />
    <GlobalStyles />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

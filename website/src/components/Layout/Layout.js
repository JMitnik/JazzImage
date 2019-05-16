import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from '../Sidebar/Sidebar';
import LayoutStyles from './Layout.style';
import GlobalStyles from '../Styles/GlobalStyles';

import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
    </style>
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

          <div className="InnerApp">
            <main>{children}</main>
            <Footer />
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

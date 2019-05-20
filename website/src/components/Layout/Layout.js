import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from '../Sidebar/Sidebar';
import LayoutStyles from './Layout.style';
import GlobalStyles from '../Styles/GlobalStyles';
import AppTheme from '../Styles/AppTheme';
import { ThemeProvider } from 'styled-components';

import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Lato:300,400');
      @import
      url('https://fonts.googleapis.com/css?family=Merriweather:300,400,900i&display=swap');
      2{' '}
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
        <ThemeProvider theme={AppTheme}>
          <LayoutStyles>
            {/* <Sidebar /> */}

            <div className="InnerApp">
              <main>{children}</main>
              <Footer />
            </div>
          </LayoutStyles>
        </ThemeProvider>
      )}
    />
    <GlobalStyles />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

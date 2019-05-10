import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const SidebarStyles = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #e4e4e4;
  background: white;

  .active {
    font-weight: bold;
  }

  ul {
    list-style: none;

    a {
      color: #444;
      text-decoration: none;
      display: block;
      margin-bottom: 24px;
    }
  }
`;

const Sidebar = props => (
  <div>
    <SidebarStyles>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/albums" activeClassName="active">
            Albums
          </Link>
        </li>
      </ul>
    </SidebarStyles>
  </div>
);

Sidebar.propTypes = {
  test: PropTypes.string
};

Sidebar.propTypes = {};

export default Sidebar;

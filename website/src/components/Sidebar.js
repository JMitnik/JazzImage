import React from 'react';
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
  background: #444;
  color: white;

  .active {
    font-weight: bold;
  }

  ul {
    list-style: none;

    a {
      color: inherit;
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

export default Sidebar;

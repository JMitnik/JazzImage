import React from 'react';
import { Link } from 'gatsby';
import SidebarStyles from './Sidebar.style';

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

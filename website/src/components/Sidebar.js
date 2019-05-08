import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SidebarStyles = styled.div`
  position: fixed;
  right: 0;

  ul {
    list-style: none;
  }
`;

const Sidebar = props => (
  <div>
    <SidebarStyles>
      <ul>
        <li>Home</li>
      </ul>
    </SidebarStyles>
  </div>
);

Sidebar.propTypes = {
  test: PropTypes.string
};

Sidebar.propTypes = {};

export default Sidebar;

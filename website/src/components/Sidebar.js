import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => (
  <div>
    <div className="dog">{props.test}</div>
  </div>
);

Sidebar.propTypes = {
  test: PropTypes.string
};

Sidebar.propTypes = {};

export default Sidebar;

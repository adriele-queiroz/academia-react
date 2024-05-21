
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const NavItem = ({ href, label }) => {
  return (
    <li className="nav-item">
      <a href={href} className="nav-link">{label}</a>
    </li>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavItem;
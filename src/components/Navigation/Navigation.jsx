import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const Navigation = ({
  children,
  className = '',
  listClassName = '',
  listStyle,
  itemAlignment = 'left',
  style,
}) => (
  <nav className={`${styles['logiq-navigation']} ${className}`} style={style}>
    <ul
      className={`
        ${styles['logiq-navigation__list']}
        ${styles[`logiq-navigation__list--alignment-${itemAlignment}`]}
        ${listClassName}
      `}
      style={listStyle}
    >
      {children}
    </ul>
  </nav>
);

const NavigationItem = ({
  className = '',
  style,
  children,
}) => (
  <li
    className={`${styles['logiq-navigation__list-item']} ${className}`}
    style={style}
  >
    {children}
  </li>
);

Navigation.propTypes = {
  className: PropTypes.string,
  itemAlignment: PropTypes.oneOf([
    'right',
    'center',
    'left',
  ]),
  listClassName: PropTypes.string,
  style: PropTypes.object,
  listStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

NavigationItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export {
  Navigation,
  NavigationItem,
};

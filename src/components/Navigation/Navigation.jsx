import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

/**
 * This component helps you create a navigation list. You can use an item
 * manually.
 */
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

/**
 * An item in a navigation list. You can style it like you want.
 */
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
  /**
   * CSS class(es) of the `nav` element
   */
  className: PropTypes.string,

  /**
   * Alignment of the list in the navigation
   */
  itemAlignment: PropTypes.oneOf([
    'right',
    'center',
    'left',
  ]),

  /**
   * CSS class(es) of the `ul` element
   */
  listClassName: PropTypes.string,

  /**
   * Style object for the `nav` element (should be a CSS in JS object)
   */
  style: PropTypes.object,

  /**
   * Style object for the `ul` element (should be a CSS in JS object)
   */
  listStyle: PropTypes.object,

  /**
   * HTML nodes inside the `ul`, should only be of type NavigationItem
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

NavigationItem.propTypes = {
  /**
   * CSS class(es) of the `li` element.
   */
  className: PropTypes.string,

  /**
   * Style object for the `li` element (should be a CSS in JS object)
   */
  style: PropTypes.object,

  /**
   * HTML nodes inside the NavigationItem component
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export {
  Navigation,
  NavigationItem,
};

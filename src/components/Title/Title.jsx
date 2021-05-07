import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component enhances the default `h1` HTML tag by adding some accessibility sauce to it.
 */
const Title = ({ text }) => (
  <h1>
    {text}
  </h1>
);

Title.propTypes = {
  /**
   * Text to show inside the title
   */
  text: PropTypes.string.isRequired,
};

export default Title;

import React from 'react';
import PropTypes from 'prop-types';

/**
  Een vervanging voor de H1
*/
const Title = ({ text }) => (
  <h1>
    {text}
  </h1>
);

Title.propTypes = {
  /**
    De tekst in het Title element
  */
  text: PropTypes.string.isRequired,
};

export default Title;

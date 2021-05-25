import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';

const calculatePaddingBottom = (aspectRatio) => {
  const DEFAULT_RADIX = 10;

  const [height, width] = aspectRatio.split('/');
  const heightNumber = parseInt(height, DEFAULT_RADIX);
  const widthNumber = parseInt(width, DEFAULT_RADIX);

  return 100 / (heightNumber / widthNumber);
};

/**
 * Hero component with a background image and a title inside of it. Also has the possibility
 * to use some aspect ratio.
 */
const Hero = ({
  tag = 'section',
  backgroundImage,
  backgroundColor = '#efefef',
  verticalContentAlignment = 'top',
  horizontalContentAlignment = 'left',
  aspectRatio = '16/9',
  useAspectRatio = false,
  children,
  className,
}) => {
  const HtmlTag = tag;
  const verticalAlignmentClassName = styles[`vertical-${verticalContentAlignment}`];
  const horizontalAlignmentClassName = styles[`horizontal-${horizontalContentAlignment}`];
  const paddingBottomPercentage = calculatePaddingBottom(aspectRatio);

  return useAspectRatio ? (
    <HtmlTag
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor,
        paddingBottom: `${paddingBottomPercentage}%`,
      }}
      className={`
        ${styles['logiq-hero']}
        ${styles['logiq-hero--with-fixed-ratio']}
        ${className}
      `}
    >
      <div
        className={`
          ${styles['logiq-hero--fixed-ratio-content']}
          ${verticalAlignmentClassName}
          ${horizontalAlignmentClassName}
        `}
      >
        {children}
      </div>
    </HtmlTag>
  ) : (
    <HtmlTag
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor,
      }}
      className={`
        ${styles['logiq-hero']}
        ${verticalAlignmentClassName}
        ${horizontalAlignmentClassName}
        ${className}
      `}
    >
      {children}
    </HtmlTag>
  );
};

Hero.propTypes = {
  /**
   * The HTML tag to use for the Hero component, defaults to `section`
   */
  tag: PropTypes.string,

  /**
   * Url of the background image of the Hero component
   */
  backgroundImage: PropTypes.string,

  /**
   * Background color for when the image isn't loaded yet.
   */
  backgroundColor: PropTypes.string,

  /**
   * Vertical alignment of content (nodes) inside the hero component
   */
  verticalContentAlignment: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),

  /**
   * Horizontal alignment of content (nodes) inside the hero component
   */
  horizontalContentAlignment: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),

  /**
   * Aspectratio of the Hero component (optional), default to 16/9
   */
  aspectRatio: PropTypes.string,

  /**
   * Wether to use the aspect ratio or stick to a default height.
   */
  useAspectRatio: PropTypes.bool,

  /**
   * HTML nodes inside the Hero component, should be of type HeroContent
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  /**
   * Class(es) of the hero component
   */
  className: PropTypes.string,
};

/**
 * Content wrapper for content inside the Hero component
 */
const HeroContent = ({ children, className, style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

HeroContent.propTypes = {
  /**
   * HTML nodes inside the HeroContent component
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),

  /**
   * CSS class(es) of the HeroContent component
   */
  className: PropTypes.string,

  /**
   * Style object of the HeroContent component, should be a CSS in JS sort of object.
   */
  style: PropTypes.object,
};

export {
  Hero,
  HeroContent,
};

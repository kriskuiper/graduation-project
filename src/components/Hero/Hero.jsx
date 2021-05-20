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

const Hero = ({
  tag = 'section',
  backgroundImage,
  backgroundColor = '#efefef',
  verticalContentAlignment = 'top',
  horizontalContentAlignment = 'left',
  aspectRatio = '16/9',
  useAspectRatio = false,
  children,
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
      `}
    >
      {children}
    </HtmlTag>
  );
};

Hero.propTypes = {
  tag: PropTypes.string,
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string,
  verticalContentAlignment: PropTypes.oneOf([
    'top',
    'center',
    'bottom',
  ]),
  horizontalContentAlignment: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  aspectRatio: PropTypes.string,
  useAspectRatio: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

const HeroContent = ({ children, className, style }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

HeroContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
  style: PropTypes.object,
};

export {
  Hero,
  HeroContent,
};

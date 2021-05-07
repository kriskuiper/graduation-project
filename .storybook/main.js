module.exports = {
  stories: ['../src/docs/*.stories.mdx', '../src/components/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
  ]
}

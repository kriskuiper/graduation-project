/**
  This configuration was used for the first iteration of the design of the
  documentation website of the component library.
  
  However, when using this configuration I (Kris) found out that the
  'controls' tab can't show any text because of the 'white' text color conflicting
  with the background of appContentBg...
  
  Therefore I created a second config which maybe is a little bit less shiny but
  still will do a good job of adding some OrangeTalent design sauce on top of the
  default Storybook design.

  @see './config-v2'
*/

export default {
  base: 'light',
  brandTitle: 'Logiq, A component library by OrangeTalent',
  brandUrl: 'https://github.com/kriskuiper/graduation-project',
  brandImage: 'https://www.orangetalent.nl/front_assets/img/brand/logo-white.svg',

  colorSecondary: '#eb6619',

  appBg: '#12112d',
  appContentBg: '#f4f5fa',
  appBorderColor: '#dfe2f0',

  textColor: 'white',

  barTextColor: '#9999b1',
  barSelectedColor: '#eb6619',
}

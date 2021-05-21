import { Navigation, NavigationItem } from './Navigation';

const navigationItems = [
  {
    link: '/unicorns',
    label: 'Eénhoorns'
  },
  {
    link: '/about',
    label: 'Over ons'
  },
  {
    link: '/cake',
    label: 'Taart'
  }
]

export default {
  component: Navigation,
  subcomponents: {
    NavigationItem
  },
  title: '02. Components/Navigation',
}

export const Default = () => (
  <Navigation>
    {navigationItems.map((item) => (
      <NavigationItem>
        <a href="#">
          {item.label}
        </a>
      </NavigationItem>
    ))}
  </Navigation>
)

export const CenterAligned = () => (
  <Navigation itemAlignment="center">
    {navigationItems.map((item) => (
      <NavigationItem>
        <a href="#">
          {item.label}
        </a>
      </NavigationItem>
    ))}
  </Navigation> 
)

export const RightAligned = () => (
  <Navigation itemAlignment="right">
    {navigationItems.map((item) => (
      <NavigationItem>
        <a href="#">
          {item.label}
        </a>
      </NavigationItem>
    ))}
  </Navigation> 
)

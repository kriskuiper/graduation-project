import { Hero, HeroContent } from './Hero';

export default {
  component: Hero,
  subcomponents: {
    HeroContent,
  },
  title: '02. Components/Hero'
}

export const Default = () => (
  <Hero>
    <HeroContent>
      <h1>Some title</h1>
      <p>This is some awesome subtitle</p>
    </HeroContent>
  </Hero>
);

export const WithAspectRatio = () => (
  <Hero
    useAspectRatio
    aspectRatio="16/9"
   >
    <HeroContent>
      <h1>Some title</h1>
      <p>This is some awesome subtitle</p>
    </HeroContent>
  </Hero>
);

export const WithContentAlignment = () => (
  <Hero
    verticalContentAlignment="center"
    horizontalContentAlignment="center"
  >
    <HeroContent>
      <h1>Some title</h1>
      <p>This is some awesome subtitle</p>
    </HeroContent>
  </Hero> 
);

import MenuContainer from '@/general/Menu'
import Hero from '~/home/Hero'

const carLinks = [
  { name: 'SUV', route: '#' },
  { name: 'Sedan', route: '#' },
  { name: 'Pickup', route: '#' },
  { name: 'Coupe', route: '#' },
  { name: 'Hatchback', route: '#' },
  { name: 'Convertible', route: '#' },
  { name: 'Wagon', route: '#' },
  { name: 'Crossover', route: '#' }
]

export default () => (
  <main>
    <MenuContainer />
    <Hero
      image='/static/img/home/hero.jpg'
      imageRetina='/static/img/home/hero@2x.jpg'
      carLinks={carLinks}
    />
  </main>
)

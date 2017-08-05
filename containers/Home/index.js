import Home from '~/Home'

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

export default () =>
  <Home
    heroImage='/static/img/home/hero.jpg'
    heroImageRetina='/static/img/home/hero@2x.jpg'
    heroCarLinks={carLinks}
  />

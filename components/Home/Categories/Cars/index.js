import Car from './Car'

import { Column, Row } from '~/layout'

const CarsArray = [
  { id: 1, name: 'SUV', pic: '/static/img/home/suv.png', link: '#' },
  { id: 2, name: 'Sedan', pic: '/static/img/home/sedan.png', link: '#' },
  { id: 3, name: 'Pickup', pic: '/static/img/home/pickup.png', link: '#' },
  { id: 4, name: 'Coupe', pic: '/static/img/home/coupe.png', link: '#' },
  { id: 5, name: 'Hatchback', pic: '/static/img/home/hatchback.png', link: '#' },
  { id: 6, name: 'Convertible', pic: '/static/img/home/convertible.png', link: '#' },
  { id: 7, name: 'Wagon', pic: '/static/img/home/wagon.png', link: '#' },
  { id: 8, name: 'Crossover', pic: '/static/img/home/crossover.png', link: '#' }
]

const renderCars = cars =>
  cars.map(c =>
    <Column key={c.id} laptop={{ cols: 3 }}>
      <Car
        title={c.name}
        pic={c.pic}
        href={c.link}
      />
    </Column>
  )

export default () =>
  <Row>
    { renderCars(CarsArray) }
  </Row>

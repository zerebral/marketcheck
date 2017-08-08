import Car from './Car'

import { Column, Row } from '~/layout'

const CarsArray = [
  { id: 1, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 2, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 3, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 4, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 5, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 6, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 7, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' },
  { id: 8, name: 'SUV', pic: '/static/img/home/hero.jpg', link: '#' }
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

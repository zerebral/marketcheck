import styled from 'styled-components'
import Brand from './Brand'
import { em } from 'polished'
import { percentage } from '%/styles/mixins'

const Brands = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: ${em(40)};
  max-width: ${percentage(10.5, 12)};
  margin-left: auto;
  margin-right: auto;
`

const AllTheCars = [
  { img: '/static/img/home/ford.png', link: '#' },
  { img: '/static/img/home/chevrolet.png', link: '#' },
  { img: '/static/img/home/nissan.png', link: '#' },
  { img: '/static/img/home/honda.png', link: '#' },
  { img: '/static/img/home/dodge.png', link: '#' },
  { img: '/static/img/home/mazda.png', link: '#' },
  { img: '/static/img/home/bmw.png', link: '#' },
  { img: '/static/img/home/lexus.png', link: '#' },
  { img: '/static/img/home/acura.png', link: '#' },
  { img: '/static/img/home/toyota.png', link: '#' }
]
export default () =>
  <Brands>
    {AllTheCars.map((car, index) =>
      <Brand
        key={index + car.img}
        img={car.img}
        link={car.link}
      />
    )}
  </Brands>

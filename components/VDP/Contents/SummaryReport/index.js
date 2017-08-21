import Price from '../SVG/price.svg'
import Miles from '../SVG/miles.svg'
import { Accordion } from '~/general'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
  }
`

export default () =>
  <Accordion title='VIN Summary Report' blue open >
    <Wrapper>
      <Price />
      <p>This car is $1,234 below market value</p>

      <Miles />
      <p>Miles driven per year: 6,454 miles vs 7,545 miles for the average 2017 Toyota Camry...</p>
    </Wrapper>
  </Accordion>

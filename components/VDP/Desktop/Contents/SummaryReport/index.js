import Section from '~/VDP/Section'
import Price from '../SVG/price.svg'
import Miles from '../SVG/miles.svg'
import Cal from '../SVG/cal.svg'
import Alert from '../SVG/alert.svg'
import Lock from '../SVG/lock.svg'
import Star from '../SVG/star.svg'
import Check from '../SVG/check.svg'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }

  a {
    color: #115baa;
    font-weight: 700;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export default () =>
  <Section title='VIN Summary Report'>
    <Wrapper>
      <Row>
        <Price />
        <p>This car is $1,234 below market value</p>
      </Row>

      <Row>
        <Miles />
        <p>Miles driven per year: 6,454 miles vs 7,545 miles for the average 2017 Toyota Camry...</p>
      </Row>

      <Row>
        <Cal />
        <p>Days listed for sale: 756 days - Cars like this usually sell in 54 days.</p>
      </Row>

      <Row>
        <Alert />
        <p>2017 Toyota Camry vehicles have had 3 recalls. It’s <a href='#'>FREE to check</a> if this VIN has an open recall.</p>
      </Row>

      <Row>
        <Lock />
        <p>It’s <a href='#'>FREE to check</a> if the car was stolen.</p>
      </Row>

      <Row>
        <Star />
        <p>The dealer selling this car has a MarketCheck rating of 4.5 stars (out of 5)</p>
      </Row>

      <Row>
        <Check />
        <p>$665 could be saved depending on when you buy cars like this.</p>
      </Row>

    </Wrapper>
  </Section>

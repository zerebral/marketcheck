import Section from '~/VDP/Section'
import styled from 'styled-components'
import { rgba } from 'polished'

const Wrapper = styled.div`
  position: relative;
  color: ${rgba('#000', 0.56)};

  strong {
    color: #000;
    text-transform: capitalize;
  }
`

const Intro = styled.h6`
  font-size: 14px;
  line-height: 2;
  margin-bottom: 25px;
  font-weight: 400;
`

const Contents = styled.div`
  columns: 2;

  p {
    margin-bottom: 20px;
  }
`

export default ({
  type,
  model,
  trim,
  body,
  exteriorColor,
  interiorColor,
  doors,
  brief,
  stockNumber,
  vin,
  miles,
  engine,
  transmission,
  fuel,
  drivetrain,
  cityMiles,
  highwayMiles
}) =>
  <Section title='Vehicle Information'>
    <Wrapper>
      <Intro>Raw performance, agility, unparalleled ride and handling. These are attributes that people have come to expect from Lotus and the Exige Sport 350 is no exception. Now also available as a roadster - the lightest possible incarnation of the current generation Exige.</Intro>

      <Contents>
        <p>Type <strong>{type}</strong></p>
        <p>Model <strong>{model}</strong></p>
        <p>Trim <strong>{trim}</strong></p>
        <p>Body <strong>{body}</strong></p>
        <p>Exterior <strong>{exteriorColor}</strong></p>
        <p>Interior <strong>{interiorColor}</strong></p>
        <p>Doors <strong>{doors}</strong></p>
        <p>Stock# <strong>{stockNumber}</strong></p>
        <p>Model # <strong></strong></p>
        <p>VIN # <strong>{vin}</strong></p>
        <p>Mileage <strong>{miles}</strong></p>
        <p>Engine <strong>{engine}</strong></p>
        <p>Transmission <strong>{transmission}</strong></p>
        <p>Fuel <strong>{fuel}</strong></p>
        <p>Drive <strong>{drivetrain}</strong></p>
        <p>MPG <strong>{parseInt(cityMiles)} City / {parseInt(highwayMiles)} Hwy</strong></p>
      </Contents>

    </Wrapper>
  </Section>

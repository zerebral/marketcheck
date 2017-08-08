import styled from 'styled-components'
import { rem } from 'polished'

import Face from './Face'
import Name from './Name'
import CarModel from './CarModel'
import Rating from './Rating'

const Statement = styled.div`
  padding: 0 ${rem(15)};
  flex-basis: ${1 / 3 * 100}%;
  text-align: center;
`

export default ({
  face,
  name,
  model,
  opinion
}) =>
  <Statement>
    <Face src={face} alt={name} />
    <Name>{ name }</Name>
    <CarModel>{ model }</CarModel>
    <Rating />
  </Statement>

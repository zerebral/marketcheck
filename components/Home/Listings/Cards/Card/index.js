import styled from 'styled-components'
import { rgba } from 'polished'
import { colors } from '%/styles'

import CardContainer from './Container'
import Image from './Image'
import Info from './Info'
import NewBadge from './NewBadge'

const Card = styled.a`
  display: block;
  background: ${colors.white};
  box-shadow: 2px 2px 5px ${rgba('#000', 0.15)};
  text-align: center;
`

export default ({
  image,
  newCar,
  name,
  location,
  price,
  difference,
  seller,
  sellerUrl
}) =>
  <CardContainer>
    <Card href={sellerUrl} title={name}>
      <Image src={image} alt={name} />
      <Info>
        { newCar ? <NewBadge>New</NewBadge> : null }
      </Info>
    </Card>
  </CardContainer>

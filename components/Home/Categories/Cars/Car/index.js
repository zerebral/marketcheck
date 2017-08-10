import styled from 'styled-components'
import { colors } from '%/styles'
import { rem } from 'polished'

const Car = styled.a`
  text-align: center;
  display: block;
  color: ${colors.black};
  padding: ${rem(50)} 0;
`

const CarPic = styled.img`
  display: block;
  margin: 0 auto ${rem(60)};
`

const CarTitle = styled.h5`
  font-size: ${rem(16)};
  line-height: ${19 / 16};
`

export default ({
  title,
  pic,
  href
}) =>
  <Car href={href} title={title}>
    <CarPic src={pic} alt={title} />
    <CarTitle>{title}</CarTitle>
  </Car>

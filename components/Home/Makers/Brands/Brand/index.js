import styled from 'styled-components'

import { mediaMin } from '%/styles/mixins'
import { rem, em } from 'polished'

const laptopStyles = mediaMin.laptop`
  max-width: ${1 / 5 * 100}%;
  flex-basis: ${1 / 5 * 100}%;
`
const BrandColumn = styled.div`
  padding: ${em(5)};
  ${laptopStyles}
`

const Brand = styled.a`
  background-color: #ebefef;
  height: ${rem(135)};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  display: block;
  margin: auto;
`

export default ({
  img,
  link
}) =>
  <BrandColumn>
    <Brand href={link}>
      <Image src={img} />
    </Brand>
  </BrandColumn>

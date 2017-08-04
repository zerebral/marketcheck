import { Container, Column, Row } from '~/layout'
import { align } from '%/styles/mixins'
import Wrapper from './Wrapper'
import H1 from './H1'
import PropTypes from 'prop-types'

const AlignedContainer = Container.extend`
  width: 100%;
  ${align()}
`

const Hero = ({ image, imageRetina }) => (
  <Wrapper image={imageRetina} imageRetina={imageRetina}>
    <AlignedContainer>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }} >
          <H1>Search over 14 million Used and New Cars</H1>
        </Column>
      </Row>
    </AlignedContainer>
  </Wrapper>
)

Hero.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string
}

export default Hero

import { Container, Column, Row } from '~/layout'
import { align } from '%/styles/mixins'
import Wrapper from './Wrapper'
import H1 from './H1'
import Phone from './Phone'
import PropTypes from 'prop-types'
import CarLinks from './CarLinks'
import Form from './Form'

const AlignedContainer = Container.extend`
  width: 100%;
  ${align()}
`

const Hero = ({
  image,
  imageRetina,
  carLinks,
  onSubmit
}) =>
  <Wrapper image={imageRetina} imageRetina={imageRetina}>
    <AlignedContainer>
      <Row>
        <Column laptop={{ cols: 8, offset: 2 }} >
          <H1>Search over 14 million Used and New Cars</H1>
          <Form onSubmit={onSubmit} />
          <CarLinks links={carLinks} />
          <Phone />
        </Column>
      </Row>
    </AlignedContainer>
  </Wrapper>

Hero.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string,
  carLinks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired,
  onSubmit: PropTypes.func
}

export default Hero

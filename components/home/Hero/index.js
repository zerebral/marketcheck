import { Container, Column, Row } from '~/layout'
import { align } from '%/styles/mixins'
import Wrapper from './Wrapper'
import H1 from './H1'
import Phone from './Phone'
import PropTypes from 'prop-types'
import CarLinks from './CarLinks'
import Form from './Form'
import styled from 'styled-components'

const AlignedContainer = styled.div`
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
      <Container>
        <Row>
          <Column laptop={{ cols: 8, offset: 2 }} phablet={{ cols: 10, offset: 1 }} >
            <H1>Search over 14 million Used and New Cars</H1>
            <Form onSubmit={onSubmit} />
            <CarLinks links={carLinks} />
            <Phone />
          </Column>
        </Row>
      </Container>
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

import Wrapper from './Wrapper'
import PropTypes from 'prop-types'
import Container from '~/general/Container'
import Column from '~/general/Column'
import Row from '~/general/Row'

const Hero = ({ image, imageRetina }) => (
  <Wrapper image={imageRetina} imageRetina={imageRetina}>
    <Container>
      <Row>
        <Column
          phablet={{ offset: 3 }}
          laptop={{ cols: 11, offset: 2 }}
          desktop={{ cols: 10 }} >
          Porta felis.
          Fusce tristique leo quis pede. Cras nibh. Sed eget est vitae tortor mollis
          ullamcorper. Suspendisse placerat dolor a dui. Vestibulum condimentum dui et
          elit. Pellentesque porttitor ipsum at ipsum. Nam massa. Duis lorem. Donec
          porta. Proin ligula. Aenean nunc massa, dapibus quis, imperdiet id, commodo
          a, lacus. Cras sit amet erat et nulla varius aliquet. Aliquam erat volutpat.
          Praesent feugiat vehicula pede. Suspendisse pulvinar, orci in sollicitudin
          venenatis, nibh libero hendrerit sem, eu tempor nisi felis et metus. Etiam
          gravida sem ut mi. Integer volutpat, enim eu varius gravida, risus urna
          venenatis lectus, ac ultrices quam nulla eu leo. Duis.
        </Column>
      </Row>
    </Container>
  </Wrapper>
)

Hero.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string
}

export default Hero

import Wrapper from './Wrapper'
import PropTypes from 'prop-types'
import Container from '~/general/Container'
import Column from '~/general/Column'

const Hero = ({ image, imageRetina }) => (
  <Wrapper image={imageRetina} imageRetina={imageRetina}>
    <Container>
      <Column desktop={25} laptop={50} phablet={75}>
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
    </Container>
  </Wrapper>
)

Hero.propTypes = {
  image: PropTypes.string,
  imageRetina: PropTypes.string
}

export default Hero

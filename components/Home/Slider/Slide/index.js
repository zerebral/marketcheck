import styled from 'styled-components'
import { colors } from '%/styles'
import { rem, rgba } from 'polished'

import { H6, H2, P } from '~/general'
import { Container, Row, Column } from '~/layout'

const Slide = styled.div`
  background-color: ${colors.softgray};
  background-image: ${props => props.image};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: ${rem(90)};
  min-height: ${rem(600)};
  color: ${rgba(colors.white, 0.88)};
`

export default ({
  image,
  subtitle,
  title,
  text
}) =>
  <Slide image={image}>
    <Container>
      <Row>
        <Column laptop={{ cols: 4, offset: 2 }}>
          <H6>{ subtitle }</H6>
          <H2>{ title }</H2>
          <P>{ text }</P>
        </Column>
      </Row>
    </Container>
  </Slide>

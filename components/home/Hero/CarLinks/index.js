import styled from 'styled-components'
import { rem } from 'polished'
import PropTypes from 'prop-types'
import { mediaMax } from '%/styles/mixins'

const CarLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;

  ${mediaMax.laptop`
    flex-wrap: wrap;
  `}
`

const CarLink = styled.li`
  font-size: ${rem(14)};
  & + & {
    margin-left: ${rem(20)};
    ${mediaMax.laptop`
      margin-left: 0;
    `}
  }

  ${mediaMax.laptop`
    margin-bottom: ${rem(10)};
    max-width: 25%;
    flex-basis: 25%;
    padding: 0 ${rem(5)};
  `}
`

const Rendered = ({links}) => (
  <CarLinks>
    {links.map((link, index) => (
      <CarLink key={link + index}>
        <a href={link.route}>{ link.name }</a>
      </CarLink>
    ))}
  </CarLinks>
)

Rendered.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired
}

export default Rendered

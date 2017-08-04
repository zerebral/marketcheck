import styled from 'styled-components'
import { rem } from 'polished'
import PropTypes from 'prop-types'

const CarLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  list-style: none;
`

const CarLink = styled.li`
  font-size: ${rem(14)};
  & + & {
    margin-left: ${rem(20)};
  }
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

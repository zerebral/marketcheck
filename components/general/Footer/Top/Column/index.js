import styled from 'styled-components'
import { rem, clearFix } from 'polished'
import { grid } from '%/styles'

import { mediaMin, percentage } from '%/styles/mixins'

import Section from './Section'
import Link from './Link'

const padding = rem(grid.gutter / 2)

const laptopStyles = mediaMin.laptop`
  width: ${percentage(1, 10)};
  margin-right: ${percentage(1, 10)};
  padding-left: 0;
  padding-right: 0;
`

const Column = styled.div`
  ${clearFix()}
  position: relative;
  padding-left: ${padding};
  padding-right: ${padding};
  float: left;
  width: 100%;

  ${laptopStyles}
`

export default ({
  section,
  links
}) =>
  <Column>
    <Section>{ section }</Section>
    { links.map((l, index) =>
      <Link
        key={index + l.name}
        href={l.link}
        title={l.name}
      >
        {l.name}
      </Link>
    ) }
  </Column>

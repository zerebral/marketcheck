import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'

import { FlexRow } from '~/layout'
import { H1, P, Button } from '~/general'

const TitleButton = Button.extend`
  margin: 0 ${em(13)};
`

const Title = styled.div`
  margin-bottom: ${em(70)};
  text-align: center;
  color: ${colors.black};
`

export default () =>
  <Title>
    <H1>Popular Listings</H1>
    <P>We analyses millions of Used and New car inventories from thousands of car deales all across US to provide you with the most accurate market view of the cars market</P>
    <FlexRow align='center' justify='center'>
      <TitleButton href='#'>See More</TitleButton>
    </FlexRow>
  </Title>

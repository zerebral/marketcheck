import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '%/styles'

import { FlexRow } from '~/layout'
import { H1, P, Button } from '~/general'
import { mediaMax } from '%/styles/mixins'

const TitleButton = styled(Button)`
  margin: 0 ${rem(13)};
`

const Title = styled.div`
  margin-bottom: ${rem(100)};
  text-align: center;
  color: ${colors.black};
  ${mediaMax.desktop`margin-bottom: ${rem(100)};`}
  ${mediaMax.laptop`margin-bottom: ${rem(80)};`}
  ${mediaMax.tablet`margin-bottom: ${rem(60)};`}
  ${mediaMax.phablet`margin-bottom: ${rem(40)};`}
`

export default () =>
  <Title>
    <H1>Listing 8 different categories</H1>
    <P>Marketcheck analyses millions of Used and New car inventories from thousands of car dealers all across US to provide you with the most accurate market view of the cars market.</P>
    <FlexRow align='center' justify='center'>
      <TitleButton primary href='#'>Get Started</TitleButton>
      <TitleButton href='#'>Know More</TitleButton>
    </FlexRow>
  </Title>

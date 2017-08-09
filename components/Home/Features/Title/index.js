import styled from 'styled-components'
import { rem } from 'polished'
import { colors } from '%/styles'

import { FlexRow } from '~/layout'
import { H1, P, Button } from '~/general'

const TitleButton = styled(Button)`
  margin: 0 ${rem(13)};
`

const Title = styled.div`
  margin-bottom: ${rem(120)};
  text-align: center;
  color: ${colors.black};
`

export default () =>
  <Title>
    <H1>All Cars... One Place!</H1>
    <P>We invite you to browse through over 8,500,000 used and new cars, trucks, SUVs, and RVs with photos, prices and detailed vehicle information.</P>
    <FlexRow align='center' justify='center'>
      <TitleButton primary href='#'>Get Started</TitleButton>
      <TitleButton href='#'>Know More</TitleButton>
    </FlexRow>
  </Title>

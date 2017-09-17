import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import SearchArgument from './SearchArgument'

export default () =>
  <FlexCol>
    <Wrapper>
      <SearchArgument argument='Used 2015 Audi A5 in Atlanta, GA' location='Atlanta, GA' />
    </Wrapper>
  </FlexCol>

import { FlexRow, OutContainer } from '~/layout'
import Wrapper from './Wrapper'
import Sidebar from './Sidebar'
import Results from './Results'

export default () =>
  <Wrapper>
    <OutContainer>
      <FlexRow>
        <Sidebar />
        <Results />
      </FlexRow>
    </OutContainer>
  </Wrapper>

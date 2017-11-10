import { OutContainer, FlexRow, FlexCol } from '~/layout'
import { currency } from '%/format'
import { mediaMax } from '%/styles/mixins'
import Wrapper from './Wrapper'
import FilterBy from './FilterBy'
import ResetBtn from './ResetBtn'
import Averages from './Averages'
import SortBy from './SortBy'

import styled from 'styled-components'

const FlexColLeft = styled(FlexCol)`
  text-align: left;
  ${mediaMax.desktop`
    max-width: 30%;
  `}
`

const FlexColRight = styled(FlexCol)`
  text-align: right;
  ${mediaMax.desktop`
    max-width: 70%;
  `}
`

export default (props) => {
  return (
    <Wrapper>
      <OutContainer>
        <FlexRow>
          <FlexColLeft>
            <FilterBy name='Filter by' />
            <ResetBtn name='Reset' resetBtn={props.resetButton} />
          </FlexColLeft>
          <FlexColRight>
            <Averages label='Avg. Miles' miles={props.responseFactory.stats.miles.mean + ' mi'} />
            <Averages label='Avg. Price' miles={currency(props.responseFactory.stats.price.mean)} />
            <SortBy label='Sort By' selected='Nearest First' items={['Nearest First', 'Nearest Second', 'Nearest Third']} />
          </FlexColRight>
        </FlexRow>
      </OutContainer>
    </Wrapper>
  )
}
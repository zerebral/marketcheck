import { OutContainer, FlexRow, FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import FilterBy from './FilterBy'
import ResetBtn from './ResetBtn'
import Averages from './Averages'
import SortBy from './SortBy'

import styled from 'styled-components'

const FlexColLeft = styled(FlexCol)`
	text-align: left;
`;

const FlexColRight = styled(FlexCol)`
	text-align: right;
`;

export default ({
}) =>
  <Wrapper>
  	<OutContainer>
  		<FlexRow>
  			<FlexColLeft>
		  		<FilterBy name="Filter by" />
		  		<ResetBtn name="Reset" link="#"></ResetBtn>
  			</FlexColLeft>
  			<FlexColRight>
  				<Averages label="Avg. Miles" miles="68606 mi" />
  				<Averages label="Avg. Price" miles="$17013" />
  				<SortBy label="Sort By" selected="Nearest First" items={['Nearest First', 'Nearest Second', 'Nearest Third']} />
  			</FlexColRight>
  		</FlexRow>
  	</OutContainer>
  </Wrapper>

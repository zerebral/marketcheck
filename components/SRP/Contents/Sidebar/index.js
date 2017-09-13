import styled from 'styled-components'
import { Container, FlexRow, FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import GroupBtn from './GroupBtn'

const buttons = [
	{
		label: 'Used',
		value: 'used'
	},
	{
		label: 'New',
		value: 'new'
	},
	{
		label: 'Certified',
		value: 'certified'
	}
];

const SidebarFlexCol = styled(FlexCol)`
	max-width: 250px;
`;

export default ({
}) =>
	<FlexRow>
		<SidebarFlexCol>
			<Wrapper>
				<GroupBtn buttons={buttons} />
			</Wrapper>
		</SidebarFlexCol>
		<FlexCol>
		</FlexCol>
	</FlexRow>

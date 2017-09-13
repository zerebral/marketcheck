import styled from 'styled-components'
import { Container, FlexRow, FlexCol } from '~/layout'
import Wrapper from './Wrapper'
import GroupBtn from './GroupBtn'
import InputRange from './InputRange'
import DoubleRange from './DoubleRange'
import SimpleCheckbox from './SimpleCheckbox'

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

const list = [
	{
		label: 'Great Deal',
		value: 'grea-deal'
	},
	{
		label: 'Good Deal',
		value: 'good-deal'
	},
	{
		label: 'Fair Deal',
		value: 'fair-deal'
	},
	{
		label: 'Bad Deal',
		value: 'bad-deal'
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
				<GroupBtn label="Type" buttons={buttons} />
				<InputRange label="Distance" min={0} max={300} step={10} value={40} />
				<DoubleRange label="Price" valuePrefix="$" min={400} max={50000} step={10} value={[400, 50000]} />
				<DoubleRange label="Miles Range" min={400} max={50000} step={10} value={[400, 50000]} />
				<SimpleCheckbox label="Deals" list={list} />
			</Wrapper>
		</SidebarFlexCol>
		<FlexCol>
		</FlexCol>
	</FlexRow>

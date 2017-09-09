import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import Icon from './hamburger-icon.svg'

const FilterBy = styled.div`
	svg{
		display: inline-block;
		height: 13px;
		margin-right: ${em(10)};
		vertical-align: middle;
		width: 13px;
	}
`

const Text = styled.span`
	color: ${colors.darkengray};
	display: inline-block;
	font-size: ${em(13)};
	font-weight: 300;
	vertical-align: middle;
`;


export default ({
	name
}) => 
	<FilterBy>
		<Icon />
		<Text>{ name }</Text>
	</FilterBy>

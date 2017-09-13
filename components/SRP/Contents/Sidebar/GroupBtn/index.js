import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { rem, em } from 'polished'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'


const StyledFlexCol = styled(FlexCol)`
	padding: 0 0.5em;
`;

const Btn = styled.button`
	border: 1px solid ${colors.softblue};
	border-radius: 0.5em;
	color: ${colors.softblue};
	cursor: pointer;
	font-size: 0.8em;
	font-weight: 300;
	padding: 0.3em 1em;

	&:hover{
		background-color: ${colors.softblue};
		color: ${colors.white};
	}

	&.selected{
		background-color: ${colors.softblue};
		color: ${colors.white};
	}
`;


class GroupBtn extends Component{
	constructor(props){
		super(props);

		this.buttons = this.props.buttons;
		this.selectedValue = '';

		this.state = {
			selected: null
		}
	}

	handleSelectClick(index, value){
		this.selectedValue = value;

		this.setState({
			selected: index
		});
	}

	render(){
		return (
			<Collapsible label="Type">
				<FlexRow>
					{this.buttons.map(function(item, index){
						return (
							<StyledFlexCol key={index}>
								<Btn value={item.value} key={index} className={ this.state.selected  == index ? 'selected' : '' } onClick={() => this.handleSelectClick.bind(this)(index, item.value)}>
									{item.label}
								</Btn>
							</StyledFlexCol>
						)
					}.bind(this))}
				</FlexRow>
			</Collapsible>
		)
	}
}

export default GroupBtn;
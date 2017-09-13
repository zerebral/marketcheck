import React, { Component } from 'react'
import { FlexRow, FlexCol } from '~/layout'
import styled from 'styled-components'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import Arrow from './arrow-down.svg'


const Container = styled.div`
	padding: 1em 1em 1em 0;
`;

const FlexColLeft = styled(FlexCol)`
	text-align: left;
`;

const FlexColRight = styled(FlexCol)`
	text-align: right;
`;


const Label = styled.span`
	color: ${colors.black};
	font-size: ${em(13)};
	font-weight: 300;
	vertical-align: middle;
`;

const ArrowIcon = styled(Arrow)`
	height: 10px;
	width: 10px;
`;

const Btn = styled.button`
	cursor: pointer;
	padding: 0 0.5em;
`;

const Content = styled.div`
	height: 0;
	transform: scaleY(0);
	padding: 0;

	&.close{
		height: 0;
		transition: transform .2s ease-out, padding .5s ease-out;
		transform: scaleY(0);
	}

	&.open{
		height: 100%;
		padding: 1em 0;
		transform-origin: top;
		transition: transform .2s ease-out, padding .5s ease-out;
		transform: scaleY(1);
	}
`;


class Collapsible extends Component{
	constructor(props){
		super(props);

		this.label = this.props.label;

		this.state = {
			open: false
		}
	}

	handleOpenClick() {
		if( this.state.open ){
			this.setState({
				open: false
			}, function() {
				console.log(this.state.open);
			
			});
		}else{
			this.setState({
				open: true
			}, function() {
				console.log(this.state.open);
			});
		}
	}

	render(){
		return (
			<Container>
				<FlexRow>
					<FlexColLeft>
						<Label>{this.label}</Label>
					</FlexColLeft>
					<FlexColRight>
						<Btn onClick={this.handleOpenClick.bind(this)}>
							<ArrowIcon />
						</Btn>
					</FlexColRight>
				</FlexRow>
				<Content className={this.state.open ? 'open' : 'close'}>
					{this.props.children}
				</Content>
			</Container>
		)
	}
}

export default Collapsible
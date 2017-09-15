import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import Collapsible from '../Collapsible'

import KeyIcon from './key-icon.svg'
import FsboIcon from './fsbo-icon.svg'


const StyledFlexCol = styled(FlexCol)`
  padding: 0 0.5em;
`;

const StyledKeyIcon = styled(KeyIcon)`
  height: 28px;
  margin-bottom: 0.5em;
  width: 28px;
`;

const StyledFsboIcon = styled(FsboIcon)`
  height: 28px;
  margin-bottom: 0.5em;
  width: 28px;
`;

const Btn = styled.button`
  cursor: pointer;
  margin: ${props => props.margin ? props.margin : 0};
  text-align: center;
`;

const Label = styled.span`
  display: block;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`;


class GroupIconBtn extends Component{
  constructor(props){
    super(props);

    this.label = this.props.label;

    this.labelOne = this.props.labelOne
    this.labelTwo = this.props.labelTwo

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
      <Collapsible label={this.label}>
        <Btn margin="0 1.5em 0 0">
          <StyledKeyIcon />
          <Label>{this.labelOne}</Label>
        </Btn>
        <Btn margin="0 0 0 1.5em">
          <StyledFsboIcon />
          <Label>{this.labelTwo}</Label>
        </Btn>
      </Collapsible>
    )
  }
}

export default GroupIconBtn;
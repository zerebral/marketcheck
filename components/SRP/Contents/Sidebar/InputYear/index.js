import React, { Component } from 'react'
import styled from 'styled-components'

import { FlexRow, FlexCol } from '~/layout'
import { rem, em } from 'polished'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'


const YearBox = styled.input.attrs({ type: 'number', placeholder: 'Year number' })`
  border-bottom: 1px solid ${colors.bordergray};
  padding: 0 0.5em 0.5em;
  margin-bottom: 1em;
  width: 100%;

  &::placeholder {
    color: ${colors.bordergray};
    font-weight: 300;
  }
`;


class InputYear extends Component{
  constructor(props){
    super(props);

    this.label = this.props.label

  }

  render(){
    return (
      <Collapsible label={this.label}>
        <YearBox />
      </Collapsible>
    )
  }
}

export default InputYear;
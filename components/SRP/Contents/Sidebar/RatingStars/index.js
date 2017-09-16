import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { rem, em } from 'polished'
import { colors } from '%/styles'
import Collapsible from '../Collapsible'
import StarsControl from './StarsControl'


class RatingStars extends Component{
  constructor(props){
    super(props);

    this.label = this.props.label

    this.state = {
      rating: 1
    };

  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render(){
    return (
      <Collapsible label={this.label}>
        <StarsControl />
      </Collapsible>
    )
  }
}

export default RatingStars;
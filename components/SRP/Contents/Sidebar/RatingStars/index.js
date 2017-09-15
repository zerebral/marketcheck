import React, { Component } from 'react'
import styled from 'styled-components'

import StarsControl from 'react-stars'

import { FlexRow, FlexCol } from '~/layout'
import { rem, em } from 'polished'
import { colors } from '%/styles'

import Collapsible from '../Collapsible'


const StyledStars = styled(StarsControl)`
  span {
    padding: 0.5em;
    text-shadow: 1px 0 0 ${colors.gray}, -1px 0 0 ${colors.gray}, 0 1px 0 ${colors.gray}, 0 -1px 0 ${colors.gray}, 0.5px 0.5px ${colors.gray}, -0.5px -0.5px 0 ${colors.gray}, 0.5px -0.5px 0 ${colors.gray}, -0.5px 0.5px 0 ${colors.gray};
  }
`;


class RatingStars extends Component{
  constructor(props){
    super(props);

    this.label = this.props.label

  }

  ratingChanged(newRating) {
    console.log(newRating)
  }

  render(){
    return (
      <Collapsible label={this.label}>
        <StyledStars count={5} onChange={this.ratingChanged} size={15} color1={colors.white} color2={colors.gray} char="★" half={false} />
        <StyledStars count={5} onChange={this.ratingChanged} size={15} color1={colors.white} color2={colors.gray} char="★" half={false} />
        <StyledStars count={5} onChange={this.ratingChanged} size={15} color1={colors.white} color2={colors.gray} char="★" half={false} />
      </Collapsible>
    )
  }
}

export default RatingStars;
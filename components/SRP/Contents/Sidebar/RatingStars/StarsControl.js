import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { rem, em } from 'polished'
import { colors } from '%/styles'

import Star from './star.svg'
import Star0 from './star-o.svg'


class StarsControls extends Component{
  constructor(props){
    super(props);

    this.label = this.props.label

    this.state = {
      rating: 0
    };

  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render(){
    return (
      
    )
  }
}

export default StarsControls;
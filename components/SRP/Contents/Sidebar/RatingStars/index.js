import React, { Component } from 'react'

import Collapsible from '../Collapsible'
import Rating from './Rating.js'

class RatingStars extends Component {
  constructor (props) {
    super(props)
    this.label = this.props.label
  }

  render () {
    return (
      <Collapsible label={this.label}>
        <Rating stars={0} name='Overall' />
        <Rating stars={0} name='Overall' />
        <Rating stars={0} name='Overall' />
      </Collapsible>
    )
  }
}

export default RatingStars

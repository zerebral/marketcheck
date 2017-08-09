import React from 'react'

import Slider from '~/Home/Slider'

import SliderStyles from '~/Home/Slider/SliderStyles'

class SliderContainer extends React.Component {
  componentWillMount () {
    SliderStyles()
  }

  render () {
    return <Slider />
  }
}

export default SliderContainer

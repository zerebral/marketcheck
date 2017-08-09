import React from 'react'

import Slider from '~/Home/Slider'

import SliderStyles from '~/Home/Slider/SliderStyles'
import CustomSlickStyles from '~/Home/Slider/CustomStyles'

class SliderContainer extends React.Component {
  componentWillMount () {
    SliderStyles()
    CustomSlickStyles()
  }

  render () {
    return <Slider />
  }
}

export default SliderContainer

import React from 'react'
import VDP from '@/VDP'
import FontsHOC from '@/HOC/Fonts'

class Vdp extends React.Component {
  render () {
    return <VDP />
  }
}

export default FontsHOC(Vdp)

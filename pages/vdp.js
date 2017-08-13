import React from 'react'
import VDP from '@/VDP'
import Fonts from '@/HOC/Fonts'

class Vdp extends React.Component {
  render () {
    return <VDP />
  }
}

export default Fonts(Vdp)

import React from 'react'
import SRP from '@/SRP'
import FontsHOC from '@/HOC/Fonts'

class Srp extends React.Component {
  render () {
    return <SRP />
  }
}

export default FontsHOC(Srp)

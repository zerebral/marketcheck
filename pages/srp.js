import React from 'react'
import SRP from '@/SRP'
import FontsHOC from '@/HOC/Fonts'
import Loading from 'react-loading-animation'

class Srp extends React.Component {
  render () {
    return <SRP />
  }
}

export default FontsHOC(Srp)

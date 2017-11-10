import React from 'react'
import SRP from '@/SRP'
import FontsHOC from '@/HOC/Fonts'
import Loading from 'react-loading-animation'

class Srp extends React.Component {

  constructor (props) {
    super(props)

    this.props = props
  }

  render () {
    return <SRP {...this.props} />
  }
}

export default FontsHOC(Srp)

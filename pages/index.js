import React from 'react'
import Home from '@/Home'
import FontsHOC from '@/HOC/Fonts'

class Index extends React.Component {
  render () {
    return <Home />
  }
}

export default FontsHOC(Index)

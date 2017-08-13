import React from 'react'
import Home from '@/Home'
import Fonts from '@/HOC/Fonts'

class Index extends React.Component {
  render () {
    return <Home />
  }
}

export default Fonts(Index)

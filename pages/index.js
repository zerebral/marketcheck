import React from 'react'
import Home from '@/Home'
import Fonts from '~/general/Fonts'

class Index extends React.Component {
  componentDidMount () {
    Fonts()
  }

  render () {
    return <Home />
  }
}

export default Index

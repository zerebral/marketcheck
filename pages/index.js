import React from 'react'
import { initGA, logPageView } from '%/ga'
import Home from '@/Home'
import FontsHOC from '@/HOC/Fonts'

class Index extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return <Home />
  }
}

export default FontsHOC(Index)

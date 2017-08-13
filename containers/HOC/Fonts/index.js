import React from 'react'
const FontFaceObserver = require('fontfaceobserver')

function withFonts (Child) {
  return class WrappedComponent extends React.Component {
    componentDidMount () {
      // Create a head link with the actual fonts call
      const link = document.createElement('link')
      link.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900'
      link.rel = 'stylesheet'

      document.head.appendChild(link)

      // When the fonts are loaded append class to the html
      const roboto = new FontFaceObserver('Roboto')
      roboto.load().then(() => {
        document.documentElement.classList.add('roboto')
      })
    }

    render () {
      return <Child />
    }
  }
}

export default withFonts

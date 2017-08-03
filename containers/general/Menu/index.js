import React from 'react'
import Menu from '~/general/Menu'

class MenuContainer extends React.Component {
  constructor (props) {
    super(props)
    this.bindScroll = this.bindScroll.bind(this)
    this.unbindScroll = this.unbindScroll.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.state = { active: false }
  }

  componentDidMount () {
    this.bindScroll()
  }

  bindScroll () {
    window.addEventListener('scroll', this.handleScroll)
  }

  unbindScroll () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const menu = this.menu.childNodes[0].clientHeight
    const top = document.body.scrollTop

    this.setState({active: top > menu})
  }

  render () {
    let { active } = this.state
    return (
      <div ref={div => { this.menu = div }}>
        <Menu active={active} />
      </div>
    )
  }
}

export default MenuContainer

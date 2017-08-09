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

  componentWillUnmount () {
    this.unbindScroll()
  }

  bindScroll () {
    window.addEventListener('scroll', this.handleScroll)
  }

  unbindScroll () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const height = this.menu.clientHeight
    const windowTop = window.pageYOffset

    const hasScrolledPastHeight = windowTop > height
    return this.setState({active: hasScrolledPastHeight})
  }

  render () {
    let { active } = this.state
    return (
      <Menu
        active={active}
        selfRef={el => { this.menu = el }}
      />
    )
  }
}

export default MenuContainer

import React, { Component } from 'react'
import styled from 'styled-components'
import { mediaMax } from '%/styles/mixins'
import { em } from 'polished'
import { colors } from '%/styles'
import SvgArrow from './arrow-down.svg'

const SortBy = styled.div`
  display: inline-block;
  position: relative;
`

const Label = styled.span`
  color: ${colors.gray};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  margin-right: 1em;
  vertical-align: middle;
  ${mediaMax.desktop`
   font-size: ${em(11)};
  `}
`

const Selected = styled.span`
  color: ${colors.black};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;
  ${mediaMax.desktop`
   font-size: ${em(11)};
  `}
`

const DropdownContent = styled.div`
  ${props => props.visible ? 'display: block;' : 'display: none;'}
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  ${mediaMax.desktop`
   min-width: 130px;
  `}
`

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  ${mediaMax.desktop`
   font-size: ${em(12)};
  `}

  &:hover {
    background-color: ${colors.gray};
  }
`

const Btn = styled.button`
  cursor: pointer;
  padding: 0 1em;
`

const ArrowStyled = styled(SvgArrow)`
  display: inline-block;
  vertical-align: middle;
  width: 10px;
`

class Dropdown extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label
    this.items = this.props.items

    this.state = { open: false, selected: this.props.items[0], selectedValue: 0 }
  }

  handleOpenClick () {
    if (this.state.open) {
      this.setState({
        open: false
      }, function () {
      })
    } else {
      this.setState({
        open: true
      }, function () {
      })
    }
  }

  handleSelectClick (item, index) {
    this.setState({
      selected: item,
      selectedValue: index,
      open: false
    }, function () {
    })
  }

  render () {
    return (
      <SortBy>
        <Label>{this.label}</Label>
        <Selected>{this.state.selected}</Selected>
        <Btn onClick={this.handleOpenClick.bind(this)}>
          <ArrowStyled />
        </Btn>

        <DropdownContent visible={this.state.open}>
          {this.items.map(function (item, index) {
            return <DropdownItem href='#' key={index} value={item} onClick={() => this.handleSelectClick.bind(this)(item, index)}>{item}</DropdownItem>
          }.bind(this))}
        </DropdownContent>
      </SortBy>
    )
  }
}

export default Dropdown

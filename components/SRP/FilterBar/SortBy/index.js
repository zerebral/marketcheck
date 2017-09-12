import React, { Component } from 'react'
import styled from 'styled-components'
import { em } from 'polished'
import { colors } from '%/styles'
import Arrow from './arrow-down.svg'

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
`

const Selected = styled.span`
  color: ${colors.black};
  display: inline-block;
  font-size: ${em(13)};
  font-weight: 300;
  vertical-align: middle;
`

const DropdownContent = styled.div`
  ${props => props.visible ? 'display: block;' : 'display: none;'}
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: ${colors.gray};
  }
`

const Btn = styled.button`
  cursor: pointer;
  padding: 0 1em;
`

const ArrowStyled = styled(Arrow)`
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
        console.log(this.state.open)
      })
    } else {
      this.setState({
        open: true
      }, function () {
        console.log(this.state.open)
      })
    }
  }

  handleSelectClick (item, index) {
    this.setState({
      selected: item,
      selectedValue: index,
      open: false
    }, function () {
      console.log(this.state.selectedValue)
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

import React, { Component } from 'react'
import styled from 'styled-components'
import { FlexRow, FlexCol } from '~/layout'
import { colors } from '%/styles'

import SvgIcon from './search-icon.svg'

import Collapsible from '../Collapsible'

const StyledFlexRow = styled(FlexRow)`
  padding-bottom: 0.5em;
`

const StyledFlexCol = styled(FlexCol)`
  max-width: 10%;
`

const SearchBox = styled.div`
  border-bottom: 1px solid ${colors.bordergray};
  margin-bottom: 1em;
`

const SearchIcon = styled(SvgIcon)`
  height: 15px;
  margin-right: 0.5em;
  vertical-align: middle;
  width: 15px;
`

const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Search'
})`
  width: 100%;

  &::placeholder {
    color: ${colors.bordergray};
    font-weight: 300;
  }
`

const CheckBox = styled.div`
  border: 2px solid ${colors.bordergray};
  cursor: pointer;
  height: 15px;
  width: 15px;

  &.checked {
    background-color: ${colors.darkengray};
  }
`

const Label = styled.label`
  cursor: pointer;
  font-weight: 300;
`

const MoreBtn = styled.a.attrs({
  href: '#'
})`
  color: ${colors.softblue};
  font-size: 0.8em;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`

class SearchCheckbox extends Component {
  constructor (props) {
    super(props)

    this.label = this.props.label
    this.list = this.props.list
    this.CheckValue = ''

    this.state = {
      checked: null,
      reset: false
    }
  }

  handleResetClick (value) {
    this.setState({
      checked: null,
      reset: value
    }).bind(this)

    this.CheckValue = ''
  }

  handleCheckClick (index, value) {
    this.CheckValue = value

    this.setState({
      checked: index
    })
  }

  render () {
    return (
      <Collapsible {...this.props} parentReset={this.handleResetClick.bind(this)}>
        <SearchBox>
          <StyledFlexRow>
            <StyledFlexCol>
              <SearchIcon />
            </StyledFlexCol>
            <FlexCol>
              <SearchInput />
            </FlexCol>
          </StyledFlexRow>
        </SearchBox>
        {this.list.map(function (item, index) {
          if (index < 5) {
            return (
              <StyledFlexRow key={index}>
                <StyledFlexCol>
                  <CheckBox className={this.state.checked === index ? 'checked' : ''} onClick={() => this.handleSelectClick.bind(this)(index, item.value)} />
                </StyledFlexCol>
                <FlexCol>
                  <Label onClick={() => this.handleCheckClick.bind(this)(index, item.value)}>{item.label}</Label>
                </FlexCol>
              </StyledFlexRow>
            )
          } else {
            return null
          }
        }.bind(this))}
        <MoreBtn>More</MoreBtn>
      </Collapsible>
    )
  }
}

export default SearchCheckbox

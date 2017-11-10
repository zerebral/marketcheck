import React, {Component} from 'react'
import SelectWrapper from './SelectWrapper'
import Select from './Select'
import Caret from './Caret'

class FancySelect extends Component {
  componentDidMount () {
    //
  }

  render () {
    const {blue, children, ...rest} = this.props
    return (
      <SelectWrapper blue={blue} >
        <Select {...rest} innerRef={el => { this.select = el }}>
          { children }
        </Select>
        <Caret />
      </SelectWrapper>
    )
  }
}

export default FancySelect

import SelectWrapper from './SelectWrapper'
import Select from './Select'
import Caret from './Caret'

export default (props) =>
  <SelectWrapper blue={props.blue} >
    <Select {...props}>
      { props.children }
    </Select>
    <Caret />
  </SelectWrapper>

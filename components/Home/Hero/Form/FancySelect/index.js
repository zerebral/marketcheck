import SelectWrapper from './SelectWrapper'
import Select from './Select'
import Caret from './Caret'

export default ({
  children,
  blue
}) =>
  <SelectWrapper blue={blue} >
    <Select>
      { children }
    </Select>
    <Caret />
  </SelectWrapper>
